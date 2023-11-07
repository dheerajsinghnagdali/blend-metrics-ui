"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { cn } from "@/lib/functions";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & {
    scrollBar?: React.ReactNode;
    viewportClassName?: string;
  }
>(
  (
    {
      className,
      children,
      scrollBar = <ScrollBar />,
      type = "scroll",
      viewportClassName,
      ...props
    },
    ref
  ) => {
    return (
      <ScrollAreaPrimitive.Root
        ref={ref}
        className={cn("relative overflow-hidden", className)}
        type={type}
        {...props}
      >
        <ScrollAreaPrimitive.Viewport
          className={cn(
            "h-full w-full rounded-[inherit] [&>div]:h-full",
            viewportClassName
          )}
        >
          {children}
        </ScrollAreaPrimitive.Viewport>
        {scrollBar}
        <ScrollAreaPrimitive.Corner />
      </ScrollAreaPrimitive.Root>
    );
  }
);
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<
    typeof ScrollAreaPrimitive.ScrollAreaScrollbar
  > & {
    thumbClassName?: string;
  }
>(({ className, thumbClassName, ...props }, ref) => (
  <>
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={ref}
      className={cn(
        "flex h-full w-2.5 touch-none select-none border-l border-l-transparent p-[1px] transition-colors",
        className
      )}
      {...props}
      orientation="vertical"
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        className={cn("relative flex-1 rounded-lg bg-gray-200", thumbClassName)}
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={ref}
      className={cn(
        "flex h-2.5 touch-none select-none border-t border-t-transparent p-[1px] transition-colors",
        className
      )}
      {...props}
      orientation="horizontal"
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        className={cn("relative flex-1 rounded-lg bg-gray-200", thumbClassName)}
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  </>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
