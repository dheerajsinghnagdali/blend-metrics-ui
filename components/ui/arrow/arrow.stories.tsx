import { Meta, StoryObj } from "@storybook/react";
import { Arrow, ArrowElement } from "./arrow";

const meta: Meta = {
  title: "Arrow",
  argTypes: {
    startId: {
      control: "select",
      options: ["item-1", "item-2", "item-3"]
    },
    endId: {
      control: "select",
      options: ["item-1", "item-2", "item-3"]
    }
  }
};

export default meta;

type Story = StoryObj<typeof Arrow>;

export const Default: Story = {
  args: {
    startId: "item-1",
    endId: "item-2"
  },
  render: (args) => (
    <>
      <div className="flex items-start gap-x-40 h-80">
        <div id="item-1" className="h-40 bg-blue-500 rounded-lg w-40" />
        <div id="item-2" className="h-40 bg-blue-500 rounded-lg w-40" />
        <div id="item-3" className="h-40 bg-blue-500 rounded-lg w-40" />
      </div>
      <Arrow
        {...args}
        startElement={({ x, y }) => (
          <ArrowElement visual="primary" x={x} y={y}>
            Start
          </ArrowElement>
        )}
        middleElement={({ x, y }) => (
          <ArrowElement visual="primary" x={x} y={y}>
            Middle
          </ArrowElement>
        )}
        endElement={({ x, y }) => (
          <ArrowElement visual="primary" x={x} y={y}>
            End
          </ArrowElement>
        )}
      />
    </>
  )
};
