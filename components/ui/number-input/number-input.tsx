"use client";

import * as React from "react";
import { ChevronDown, ChevronUp } from "@blend-metrics/icons";
import * as numberInput from "@zag-js/number-input";
import { normalizeProps, useMachine } from "@zag-js/react";
import { toString } from "@/lib/functions";
import { Input, InputRightElement } from "../input";
import { InputGroup } from "../input-group";

export function NumberInput({
  onValueChange,
  value,
  header,
  max,
  min,
  placeholder
}: {
  onValueChange?: (value: number) => void;
  value?: number;
  header?: (...args: any[]) => React.ReactNode;
  min?: number;
  max?: number;
  placeholder?: string;
}) {
  const [state, send] = useMachine(
    numberInput.machine({ id: React.useId(), min, max }),
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

  const api = numberInput.connect(state, send, normalizeProps);

  return (
    <>
      {header?.(api.labelProps)}
      <InputGroup {...api.rootProps}>
        <Input placeholder={placeholder} {...api.inputProps} />
        <InputRightElement className="inset-y-0.5 w-7 flex-col justify-between">
          <button
            className="flex-none rounded-sm bg-gray-100 px-1.5 py-1 focus-visible:outline-none"
            {...api.decrementTriggerProps}
          >
            <ChevronDown className="h-2.5 w-2.5 text-gray-500" />
          </button>
          <button
            className="flex-none rounded-sm bg-gray-100 px-1.5 py-1 focus-visible:outline-none"
            {...api.incrementTriggerProps}
          >
            <ChevronUp className="h-2.5 w-2.5 text-gray-500" />
          </button>
        </InputRightElement>
      </InputGroup>
    </>
  );
}
