import * as React from "react";
import {
  computeControlPoints,
  computeDeltas,
  getCoordinates,
  getDimensions,
  getSize,
  isElement
} from "@/lib/dom-utils";
import { abs, cn, max, toPxIfNumber } from "@/lib/functions";
import { useIsomorphicLayoutEffect, useSize } from "@/lib/hooks";
import { Point } from "@/types/dom-utils";
import { Badge, BadgeProps } from "@/components/ui";

interface ArrowProps {
  start?: Point;
  end?: Point;
  className?: string;
  indicatorClassName?: string;
  middleElement?: (point: Point) => React.ReactNode;
  endElement?: (point: Point) => React.ReactNode;
  startId: string;
  endId: string;
  strokeWidth?: number;
  endLineInflection?: number;
  startLineInflection?: number;
  dashed?: boolean;
  startElement?: (point: Point) => React.ReactNode;
}

interface ArrowElement extends BadgeProps, Point {}

export const ArrowElement = ({
  x,
  y,
  style,
  className,
  children,
  ...props
}: ArrowElement) => {
  const [ref, size] = useSize<HTMLSpanElement>();

  return (
    <Badge
      className={cn("absolute top-[--top] left-[--left]", className)}
      style={{
        ...({
          "--left": toPxIfNumber(x - size.width / 2),
          "--top": toPxIfNumber(y - size.height / 2)
        } as Record<string, string>),
        ...style
      }}
      {...props}
      asChild
    >
      <span ref={ref}>{children}</span>
    </Badge>
  );
};

const move = (p1: Point) => {
  return `M ${p1.x}, ${p1.y}`;
};

const curve = ({ p2, p3, p4 }: { p2: Point; p3: Point; p4: Point }) => {
  return `C ${p2.x}, ${p2.y} ${p3.x}, ${p3.y} ${p4.x}, ${p4.y}`;
};

const getD = ({
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

const DASH_SIZE = 3;

export const Arrow = ({
  start,
  end,
  className,
  indicatorClassName,
  middleElement,
  endElement,
  endId,
  startId,
  strokeWidth = 1,
  endLineInflection,
  startLineInflection,
  dashed,
  startElement
}: ArrowProps) => {
  const [startDimensions, setStartDimensions] = React.useState(
    start || { x: 0, y: 0 }
  );
  const [endDimensions, setEndDimensions] = React.useState(
    end || { x: 0, y: 0 }
  );

  const { absDeltaX, absDeltaY, deltaX, deltaY } = computeDeltas({
    start: startDimensions,
    end: endDimensions
  });
  const { boundingBoxBuffer, ...controlPoints } = computeControlPoints({
    absDeltaX,
    absDeltaY,
    deltaX,
    deltaY,
    endLineInflection,
    startLineInflection
  });
  const { horizontal, vertical } = boundingBoxBuffer;

  const width = absDeltaX + 2 * horizontal;
  const height = max(absDeltaY, strokeWidth) + 2 * vertical;

  const offsetX =
    Math.min(startDimensions.x, endDimensions.x) - boundingBoxBuffer.horizontal;
  const offsetY =
    Math.min(startDimensions.y, endDimensions.y) - boundingBoxBuffer.vertical;

  useIsomorphicLayoutEffect(() => {
    const startElement = document.getElementById(startId);
    const endElement = document.getElementById(endId);

    if (!startElement || !endElement) return;

    const startCoordinates = getCoordinates(startElement);
    const endCoordinates = getCoordinates(endElement);
    const startSize = getSize(startElement);
    const endSize = getSize(endElement);

    setStartDimensions(
      getDimensions({
        start: startCoordinates,
        end: endCoordinates,
        size: startSize
      })
    );
    setEndDimensions(
      getDimensions({
        start: endCoordinates,
        end: startCoordinates,
        size: endSize
      })
    );

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        const element = mutation.target;
        if (!isElement(element)) return;

        const coordinates = getCoordinates(element);
        const size = getSize(element);

        if (element.id === startId) {
          setStartDimensions(
            getDimensions({
              start: coordinates,
              end: getCoordinates(endElement),
              size
            })
          );
          setEndDimensions(
            getDimensions({
              start: getCoordinates(endElement),
              end: coordinates,
              size: getSize(endElement)
            })
          );
        } else {
          setEndDimensions(
            getDimensions({
              start: coordinates,
              end: getCoordinates(startElement),
              size
            })
          );
          setStartDimensions(
            getDimensions({
              start: getCoordinates(startElement),
              end: coordinates,
              size: getSize(startElement)
            })
          );
        }
      });
    });

    const observerOptions = {
      attributes: true
    };
    observer.observe(startElement, observerOptions);
    observer.observe(endElement, observerOptions);

    return () => {
      observer.disconnect();
    };
  }, [startId, endId]);

  return (
    <>
      <div
        className={cn(
          "inline-block absolute translate-x-[--translate-x] top-0 left-0 translate-y-[--translate-y]",
          className
        )}
        style={{
          ...({
            "--translate-x": toPxIfNumber(offsetX),
            "--translate-y": toPxIfNumber(offsetY)
          } as Record<string, string>)
        }}
      >
        <svg className={className} width={width} height={height}>
          <path
            className={cn(
              "stroke-gray-300 transition-[d] [transition-duration:0.0125s]",
              indicatorClassName
            )}
            fill="none"
            strokeWidth={strokeWidth}
            d={getD(controlPoints)}
            strokeDasharray={dashed ? DASH_SIZE : undefined}
          />
        </svg>
        {middleElement?.({
          x: abs(endDimensions.x - startDimensions.x) / 2 + horizontal,
          y: abs(endDimensions.y - startDimensions.y) / 2 + vertical
        })}
      </div>
      {endElement?.({
        x: endDimensions.x,
        y: endDimensions.y
      })}
      {startElement?.({
        x: startDimensions.x,
        y: startDimensions.y
      })}
    </>
  );
};
