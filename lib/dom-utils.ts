import { Point } from "@/types/dom-utils";
import { abs, isUndefined, max, min } from "./functions";

export function getPreview<T extends File>(
  file: T | undefined,
  onComplete: (dataUrl?: string) => void
) {
  if (isUndefined(file)) {
    onComplete(undefined);
    return () => {};
  }

  const onLoadEnd = (
    reader: FileReader,
    onComplete: (dataUrl?: string) => void
  ) => {
    return () => {
      const result = reader.result;
      if (result) {
        onComplete(result as string);
      } else {
        onComplete(undefined);
      }
    };
  };

  const reader = new FileReader();
  const handleLoadEnd = onLoadEnd(reader, onComplete);
  reader.addEventListener("loadend", handleLoadEnd);
  reader.readAsDataURL(file);

  return () => reader.removeEventListener("loadend", handleLoadEnd);
}

export function addEvent<
  TTarget extends EventTarget,
  TListener extends (...events: any[]) => any,
  TEvent extends string = string
>({
  target,
  event,
  listener,
  options
}: {
  target: TTarget;
  event: TEvent;
  listener: TListener;
  options?: boolean | AddEventListenerOptions;
}) {
  target.addEventListener(event, listener, options);

  return () => {
    target.removeEventListener(event, listener, options);
  };
}

export function stopPropagation<T extends { stopPropagation: () => void }>(
  event: T
) {
  event.stopPropagation();
}

export function preventDefault<T extends { preventDefault: () => void }>(
  event: T
) {
  event.preventDefault();
}

const getBoundingClientRect = <T extends Element>(element: T) => {
  return element.getBoundingClientRect();
};

export const getComputedStyle = <T extends Element>(element: T) => {
  return window.getComputedStyle(element);
};

export const getCoordinates = <T extends Element>(element: T) => {
  const { x, y } = element.getBoundingClientRect();
  const scrollX = window.scrollX ?? document.documentElement.scrollLeft;
  const scrollY = window.scrollY ?? document.documentElement.scrollTop;
  return { x: x + scrollX, y: y + scrollY };
};

export const getSize = <T extends Element>(element: T) => {
  const { width, height } = getBoundingClientRect(element);
  return {
    width,
    height
  };
};

export const isElement = (element: any): element is Element => {
  return element instanceof Element;
};

export const move = (p1: Point) => {
  return `M ${p1.x}, ${p1.y}`;
};

export const curve = ({ p2, p3, p4 }: { p2: Point; p3: Point; p4: Point }) => {
  return `C ${p2.x}, ${p2.y} ${p3.x}, ${p3.y} ${p4.x}, ${p4.y}`;
};

export const getD = ({
  p1,
  p2,
  p3,
  p4
}: {
  p1: Point;
  p2: Point;
  p3: Point;
  p4: Point;
}) => {
  return `${move(p1)} ${curve({ p2, p3, p4 })}`;
};

export const computeDeltas = ({ start, end }: { start: Point; end: Point }) => {
  const deltaX = end.x - start.x;
  const deltaY = end.y - start.y;

  const absDeltaX = abs(deltaX);
  const absDeltaY = abs(deltaY);

  return {
    deltaX,
    deltaY,
    absDeltaX,
    absDeltaY
  };
};

const getControlPoints = ({
  deltaX,
  absDeltaX,
  absDeltaY,
  deltaY,
  endLineInflection = 80,
  startLineInflection = 80
}: {
  deltaX: number;
  deltaY: number;
  absDeltaX: number;
  absDeltaY: number;
  endLineInflection?: number;
  startLineInflection?: number;
}) => {
  let startX = 0;
  let startY = 0;
  let endX = absDeltaX;
  let endY = absDeltaY;

  if (deltaX < 0) [startX, endX] = [endX, startX];
  if (deltaY < 0) [startY, endY] = [endY, startY];

  const lowDyYShift = calculateLowDyControlPointShift(deltaX, deltaY);
  const lowDyXShift = abs(
    calculateLowDyControlPointShift(deltaX, deltaY, MAX_X_CONTROL_POINT_SHIFT)
  );

  const p1 = {
    x: startX,
    y: startY
  };
  const p2 = {
    x: startX + startLineInflection + lowDyXShift,
    y: startY + lowDyYShift
  };
  const p3 = {
    x: endX - endLineInflection - lowDyXShift,
    y: endY - lowDyYShift
  };
  const p4 = {
    x: endX,
    y: endY
  };

  return {
    p1,
    p2,
    p3,
    p4
  };
};

export const computeControlPoints = ({
  absDeltaX,
  absDeltaY,
  deltaX,
  deltaY,
  endLineInflection,
  startLineInflection
}: {
  absDeltaX: number;
  absDeltaY: number;
  deltaX: number;
  deltaY: number;
  endLineInflection?: number;
  startLineInflection?: number;
}) => {
  const { p1, p2, p3, p4 } = getControlPoints({
    absDeltaX,
    absDeltaY,
    deltaX,
    deltaY,
    endLineInflection,
    startLineInflection
  });

  const topBorder = min(p1.y, p2.y, p3.y, p4.y);
  const bottomBorder = max(p1.y, p2.y, p3.y, p4.y);
  const leftBorder = min(p1.x, p2.x, p3.x, p4.x);
  const rightBorder = max(p1.x, p2.x, p3.x, p4.x);

  const verticalBuffer = (bottomBorder - topBorder - absDeltaY) / 2;
  const horizontalBuffer = (rightBorder - leftBorder - absDeltaX) / 2;

  const boundingBoxBuffer = {
    vertical: verticalBuffer,
    horizontal: horizontalBuffer
  };

  return {
    p1: {
      x: p1.x + horizontalBuffer,
      y: p1.y + verticalBuffer
    },
    p2: {
      x: p2.x + horizontalBuffer,
      y: p2.y + verticalBuffer
    },
    p3: {
      x: p3.x + horizontalBuffer,
      y: p3.y + verticalBuffer
    },
    p4: {
      x: p4.x + horizontalBuffer,
      y: p4.y + verticalBuffer
    },
    boundingBoxBuffer
  };
};

export const getDimensions = ({
  size,
  start,
  end
}: {
  size: {
    width: number;
    height: number;
  };
  start: Point;
  end: Point;
}) => {
  const height = end.y - start.y;
  const width = end.x - start.x;
  const absHeight = abs(height);
  const absWidth = abs(width);

  if (absHeight >= size.height) {
    if (absHeight > height) {
      return {
        x: start.x + size.width / 2,
        y: start.y
      };
    } else {
      return {
        x: start.x + size.width / 2,
        y: start.y + size.height
      };
    }
  } else {
    if (absWidth > width) {
      return {
        x: start.x,
        y: start.y + size.height / 2
      };
    } else {
      return {
        x: start.x + size.width,
        y: start.y + size.height / 2
      };
    }
  }
};

const MAX_Y_CONTROL_POINT_SHIFT = 50;
const MAX_X_CONTROL_POINT_SHIFT = 10;

export const calculateLowDyControlPointShift = (
  dx: number,
  dy: number,
  maxShift = MAX_Y_CONTROL_POINT_SHIFT
) => {
  if (dx > 0) return 0;
  const sign = dy < 0 ? -1 : 1;
  const value = Math.round(
    maxShift * Math.pow(0.9, Math.pow(1.2, Math.abs(dy) / 10))
  );

  // prevent negative zero
  if (value === 0) return 0;

  return sign * value;
};
