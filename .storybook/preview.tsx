import * as React from "react";
import { Inter } from "next/font/google";
import type { Preview } from "@storybook/react";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"]
});

const Font = ({ children }: { children: React.ReactNode }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const doc = element.ownerDocument;
    doc.documentElement.classList.add(inter.className);
  }, []);

  return <div ref={ref}>{children}</div>;
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (Story) => (
      <Font>
        <Story />
      </Font>
    )
  ],
  argTypes: {
    asChild: {
      table: {
        disable: true
      }
    }
  }
};

export default preview;
