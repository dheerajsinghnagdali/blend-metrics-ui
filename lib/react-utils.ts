"use client";

import * as React from "react";

export const createContext = <TValue>({
  displayName,
  value,
  errorMessage
}: {
  value?: TValue;
  displayName?: string;
  errorMessage?: string;
} = {}) => {
  const Context = React.createContext(value);
  Context.displayName = displayName;

  const useContext = () => {
    const context = React.useContext(Context);
    if (!context) {
      throw new Error(errorMessage);
    }
    return context;
  };

  return [Context.Provider, useContext] as const;
};

export const createStrictContext = <TValue>({
  value,
  displayName,
  errorMessage,
  strict = true
}: {
  value?: TValue;
  strict?: boolean;
  errorMessage?: string;
  displayName?: string;
}) => {
  const Context = React.createContext(value);
  Context.displayName = displayName;

  const useContext = () => {
    const context = React.useContext(Context);
    if (!context && strict) {
      throw new Error(errorMessage);
    }
    return context;
  };

  return [Context.Provider, useContext] as const;
};

export function getValidChildren(children: React.ReactNode) {
  return React.Children.toArray(children).filter((child) =>
    React.isValidElement(child)
  ) as React.ReactElement[];
}

export function mergeRefs<T = any>(
  ...refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>
): React.RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
}
