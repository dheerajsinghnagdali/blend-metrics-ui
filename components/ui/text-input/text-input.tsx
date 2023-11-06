import * as React from "react";
import { VariantProps } from "class-variance-authority";
import { callAll, cn, isUndefined } from "@/lib/functions";
import { useControllableState } from "@/lib/hooks";
import { inputVariants } from "@/components/ui";

interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  type?: "email" | "password" | "search" | "tel" | "text" | "url";
  onValueChange?: (value: string) => void;
  value?: string;
  validate?: (value: string) => boolean;
}

const TextInput = ({
  type = "text",
  variant,
  maxLength,
  value,
  onValueChange,
  className,
  onChange,
  validate = () => true,
  ...props
}: TextInputProps) => {
  const [state, setState] = useControllableState<string>({
    value,
    onChange: (value) => {
      if (!isUndefined(value)) {
        onValueChange?.(value);
      }
    },
    defaultValue: ""
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const hasMoreThanMax = maxLength ? value.length > maxLength : false;
    const isValid = validate(value);

    if (!hasMoreThanMax && isValid) {
      setState(value);
    }
  };

  return (
    <input
      className={cn(inputVariants({ variant, className }))}
      onChange={callAll(handleChange, onChange)}
      {...props}
      value={state}
      maxLength={maxLength}
    />
  );
};

export { TextInput };
