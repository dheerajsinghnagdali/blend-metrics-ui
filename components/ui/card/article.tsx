"use client";

import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/functions";
import { createContext } from "@/lib/react-utils";

const articleVariants = cva(
  "rounded-lg border border-gray-200 flex bg-white items-center gap-x-3",
  {
    variants: {
      variant: {
        default: "p-3 pr-[18px]",
        outlined:
          "hover:ring-1 h-[68px] hover:border-gray-300 p-3 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.03)] hover:ring-gray-300",
        destructive:
          "hover:ring-1 hover:border-gray-300 p-3 hover:ring-gray-300 active:ring-1 active:border-primary-500 active:ring-primary-500"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

interface ArticleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof articleVariants> {
  isDragging?: boolean;
  isError?: boolean;
  isSelected?: boolean;
}

const [ArticleProvider, useArticleContext] = createContext<{
  variant?: "default" | "outlined" | "destructive" | null;
}>({
  displayName: "ArticleContext"
});

const Article = ({
  className,
  isDragging,
  variant,
  isError,
  isSelected,
  ...props
}: ArticleProps) => {
  return (
    <ArticleProvider value={{ variant }}>
      <div
        className={cn(
          articleVariants({ variant }),
          {
            "border-gray-300 ring-1 ring-gray-300 min-w-[200px] max-w-[300px] shadow-[7px_14px_23px_5px_rgba(0,0,0,0.08)]":
              isDragging,
            "border-red-500 ring-1 ring-red-500 active:border-red-500 active:ring-red-500 hover:border-red-500 hover:ring-red-500":
              isError,
            "ring-1 border-primary-200 min-w-[200px] max-w-[300px] ring-primary-200 shadow-[7px_14px_23px_5px_rgba(0,0,0,0.08)]":
              isSelected
          },
          className
        )}
        {...props}
      />
    </ArticleProvider>
  );
};

const ArticleIconVariants = cva(
  "border-[1.5px] border-gray-200 flex items-center flex-none justify-center bg-white rounded-lg h-11 w-11",
  {
    variants: {
      rounded: {
        sm: "rounded-lg",
        md: "rounded-[9px]"
      },
      visual: {
        default: "text-primary-500",
        flushed: ""
      }
    },
    defaultVariants: {
      rounded: "sm",
      visual: "default"
    }
  }
);

interface ArticleIconProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ArticleIconVariants> {}

const ArticleIcon = ({
  className,
  rounded,
  visual,
  ...props
}: ArticleIconProps) => {
  return (
    <div
      className={cn(
        ArticleIconVariants({ className, rounded, visual }),
        className
      )}
      {...props}
    />
  );
};

const ArticleTitleVariants = cva("font-medium text-gray-900", {
  variants: {
    size: {
      sm: "text-[13px] leading-4",
      md: "text-sm leading-6"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

interface ArticleTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof ArticleTitleVariants> {}

const ArticleTitle = ({ className, size, ...props }: ArticleTitleProps) => {
  const { variant } = useArticleContext();
  return (
    <h1
      className={cn(
        ArticleTitleVariants({ size }),
        {
          truncate: variant === "outlined"
        },
        className
      )}
      {...props}
    />
  );
};

interface ArticleDescription
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const ArticleDescription = ({ className, ...props }: ArticleDescription) => {
  const { variant } = useArticleContext();
  return (
    <p
      className={cn(
        "text-xs text-gray-500 leading-[14.52px]",
        {
          truncate: variant === "outlined"
        },
        className
      )}
      {...props}
    />
  );
};

interface ArticleContent extends React.HTMLAttributes<HTMLDivElement> {}

const ArticleContent = (props: ArticleContent) => {
  return <div {...props} />;
};

export {
  Article,
  ArticleIcon,
  ArticleDescription,
  ArticleTitle,
  ArticleContent
};
