import { Bold } from "@blend-metrics/icons";
import { Meta } from "@storybook/react";
import { Toggle } from "@/components/ui";

const meta: Meta = {
  title: "Toggle"
};

export default meta;

export const Default = () => {
  return (
    <Toggle>
      <Bold />
    </Toggle>
  );
};
