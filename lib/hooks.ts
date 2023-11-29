"use client";

import * as React from "react";
import { addEvent, getSize, isElement } from "./dom-utils";
import { debounce } from "./functions";

export function useDebounce<TValue>(value: TValue, wait?: number) {
  const [state, setState] = React.useState(value);

  React.useEffect(() => {
    const { cancel } = debounce(() => setState(value), wait);

    return () => cancel();
  }, [value, wait]);

  return state;
}

export function useCallbackRef<T extends (...args: any[]) => any>(
  callback: T | undefined,
  deps: React.DependencyList = []
) {
  const callbackRef = React.useRef(callback);

  React.useEffect(() => {
    callbackRef.current = callback;
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return React.useCallback(
    ((...args) => callbackRef.current?.(...args)) as T,
    deps
  );
}

export function useControllableProp<T>(prop: T | undefined, state: T) {
  const controlled = typeof prop !== "undefined";
  const value = controlled ? prop : state;
  return React.useMemo<[boolean, T]>(
    () => [controlled, value],
    [controlled, value]
  );
}

export interface UseControllableStateProps<T> {
  value?: T;
  defaultValue?: T | (() => T);
  onChange?: (value: T) => void;
  shouldUpdate?: (prev: T, next: T) => boolean;
}

export function useControllableState<T>(props: UseControllableStateProps<T>) {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    shouldUpdate = (prev, next) => prev !== next
  } = props;

  const onChangeProp = useCallbackRef(onChange);
  const shouldUpdateProp = useCallbackRef(shouldUpdate);

  const [uncontrolledState, setUncontrolledState] = React.useState(
    defaultValue as T
  );
  const controlled = valueProp !== undefined;
  const value = controlled ? valueProp : uncontrolledState;

  const setValue = useCallbackRef(
    (next: React.SetStateAction<T>) => {
      const setter = next as (prevState?: T) => T;
      const nextValue = typeof next === "function" ? setter(value) : next;

      if (!shouldUpdateProp(value, nextValue)) {
        return;
      }

      if (!controlled) {
        setUncontrolledState(nextValue);
      }

      onChangeProp(nextValue);
    },
    [controlled, onChangeProp, value, shouldUpdateProp]
  );

  return [value, setValue] as [T, React.Dispatch<React.SetStateAction<T>>];
}

export const useToggle = (defaultValue = false) => {
  const [state, setState] = React.useState(defaultValue);

  const off = React.useCallback(() => setState(false), []);
  const on = React.useCallback(() => setState(true), []);
  const toggle = React.useCallback(
    () => setState((prevState) => !prevState),
    []
  );

  return [state, { on, off, toggle }] as const;
};

export const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? React.useEffect : React.useLayoutEffect;

export function useUpdateEffect(
  callback: React.EffectCallback,
  deps: React.DependencyList
) {
  const renderCycleRef = React.useRef(false);
  const effectCycleRef = React.useRef(false);

  React.useEffect(() => {
    const mounted = renderCycleRef.current;
    const run = mounted && effectCycleRef.current;
    if (run) {
      return callback();
    }
    effectCycleRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  React.useEffect(() => {
    renderCycleRef.current = true;
    return () => {
      renderCycleRef.current = false;
    };
  }, []);
}

export function useAddEvent<
  TTarget extends EventTarget,
  TListener extends (...args: any[]) => any,
  TEvent extends string = string
>({
  event,
  listener,
  target,
  options
}: {
  target: TTarget;
  event: TEvent;
  listener?: TListener;
  options?: boolean | AddEventListenerOptions;
}) {
  const listenerCallbackRef = useCallbackRef(listener);
  const optionsRef = React.useRef(options);

  React.useEffect(() => {
    optionsRef.current = options;
  });

  React.useEffect(() => {
    const cleanup = addEvent({
      target,
      event,
      listener: listenerCallbackRef,
      options: optionsRef.current
    });

    return () => cleanup();
  }, [target, event, optionsRef, listenerCallbackRef]);
}

export function useDocument<TEvent extends keyof DocumentEventMap>(
  event: TEvent,
  listener?: (event: DocumentEventMap[TEvent]) => void
) {
  useAddEvent({
    target: document,
    event,
    listener
  });
}

export function useWindow<TEvent extends keyof WindowEventMap>(
  event: TEvent,
  listener?: (event: WindowEventMap[TEvent]) => void
) {
  useAddEvent({
    target: window,
    event,
    listener
  });
}

export function useKeyboard({
  onKeyDown,
  onKeyUp
}: {
  onKeyDown?: (event: KeyboardEvent) => void;
  onKeyUp?: (event: KeyboardEvent) => void;
} = {}) {
  useDocument("keydown", onKeyDown);
  useDocument("keyup", onKeyUp);
}

export function useUnmountEffect(cleanup: () => void) {
  const cleanupCallbackRef = useCallbackRef(cleanup);

  React.useEffect(() => cleanupCallbackRef, [cleanupCallbackRef]);
}

export const useArray = <T>(defaultState?: T[]) => {
  const [state, setState] = React.useState(defaultState);

  const remove = React.useCallback(
    (index: number) => setState((prev) => prev?.filter((_, i) => i !== index)),
    []
  );

  const prepend = React.useCallback(
    (value: T) => setState((prev) => (prev ? [...prev, value] : [value])),
    []
  );

  const append = React.useCallback(
    (value: T) => setState((prev) => (prev ? [value, ...prev] : [value])),
    []
  );

  const clear = React.useCallback(() => setState(undefined), []);

  return [state, { remove, prepend, append, patch: setState, clear }] as const;
};

export const useSize = <T extends Element>() => {
  const ref = React.useRef<T>(null);
  const [size, setSize] = React.useState({ width: 0, height: 0 });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;

    const size = getSize(element);
    setSize(size);

    const observer = new MutationObserver((mutations) =>
      mutations.forEach((mutation) => {
        const element = mutation.target;

        if (!isElement(element)) return;

        const size = getSize(element);
        setSize(size);
      })
    );

    observer.observe(element, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return [ref, size] as const;
};

export const usePrevious = <T>(value: T) => {
  const previous = React.useRef(value);

  React.useEffect(() => {
    previous.current = value;
  });

  return previous;
};
