import { cn, computeCircumference, computePercentage } from "@/lib/functions";

interface SpinnerProps {
  size?: number;
  strokeWidth?: number;
  value?: number;
  trackClassName?: string;
  className?: string;
}

const Spinner = (props: SpinnerProps) => {
  const {
    size = 58,
    strokeWidth = 8,
    value = 80,
    trackClassName,
    className
  } = props;
  const radius = (size - strokeWidth) / 2;
  const circumference = computeCircumference(radius);
  const strokeDashArray = `${computePercentage(circumference, value)} ${
    circumference - computePercentage(circumference, value)
  }`;

  const style = `
    .blend-metrics-spinner {
      stroke-dashoffset: 0;
      animation: blend-metrics-spin 700ms linear infinite;
    }
    @keyframes blend-metrics-spin {
      to {
        stroke-dashoffset: ${circumference};
      }
    }
  `;

  return (
    <svg width={size} height={size}>
      <circle
        className={cn("fill-none stroke-gray-200", trackClassName)}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
      />
      <style>{style}</style>
      <circle
        className={cn(
          "fill-none stroke-primary-500 blend-metrics-spinner",
          className
        )}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        opacity={value === 0 ? 0 : undefined}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDashArray}
      />
    </svg>
  );
};

export { Spinner };
