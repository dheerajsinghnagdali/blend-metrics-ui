"use client";

import * as React from "react";
import { ChevronDown, ChevronUp } from "@blend-metrics/icons";
import * as percentageInput from "@zag-js/number-input";
import { normalizeProps, useMachine } from "@zag-js/react";
import { cn, toString } from "@/lib/functions";
import { WithoutRef } from "@/types/react";
import { Input, InputRightElement } from "../input";
import { InputGroup } from "../input-group";

export function PercentageInput({
  onValueChange,
  value,
  header,
  max = 100,
  min = 0,
  placeholder,
  className,
  groupClassName
}: {
  onValueChange?: (value: number) => void;
  value?: number;
  header?: (
    props: WithoutRef<
      React.DetailedHTMLProps<
        React.LabelHTMLAttributes<HTMLLabelElement>,
        HTMLLabelElement
      >
    >
  ) => React.ReactNode;
  min?: number;
  max?: number;
  placeholder?: string;
  groupClassName?: string;
  className?: string;
}) {
  const [state, send] = useMachine(
    percentageInput.machine({ id: React.useId(), min, max }),
    {
      context: {
        value: toString(value),
        onValueChange: (details) => {
          const { valueAsNumber } = details;
          onValueChange?.(valueAsNumber);
        }
      }
    }
  );

  const api = percentageInput.connect(state, send, normalizeProps);

  return (
    <>
      {header?.(api.labelProps)}
      <InputGroup className={cn("group", groupClassName)} {...api.rootProps}>
        <Input
          className={cn(
            "pr-5 focus:ring-0 text-gray-500 focus:border-gray-300",
            className
          )}
          placeholder={placeholder}
          {...api.inputProps}
        />
        <InputRightElement className="inset-y-0 w-5 flex-col justify-center group-hover:visible invisible items-start">
          <button
            className="flex-none focus-visible:outline-none"
            {...api.decrementTriggerProps}
          >
            <ChevronUp className="h-3.5 w-3.5 text-gray-400" />
          </button>
          <button
            className="flex-none focus-visible:outline-none"
            {...api.incrementTriggerProps}
          >
            <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
          </button>
        </InputRightElement>
      </InputGroup>
    </>
  );
}
