import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/lib/utils";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k: string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}

/* -------------------------------- Container -------------------------------- */

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >["children"];
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        ref={ref}
        data-chart={chartId}
        className={cn(
          "flex aspect-video justify-center text-xs",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "Chart";

/* -------------------------------- Styles -------------------------------- */

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([_, item]) => item.color || item.theme,
  );

  if (!colorConfig.length) return null;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, item]) => {
    const color =
      item.theme?.[theme as keyof typeof item.theme] || item.color;
    return color ? `  --color-${key}: ${color};` : "";
  })
  .join("\n")}
}
`,
          )
          .join("\n"),
      }}
    />
  );
};

/* -------------------------------- Tooltip -------------------------------- */

const ChartTooltip = RechartsPrimitive.Tooltip;

type ChartTooltipContentProps = {
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: "line" | "dot" | "dashed";
  nameKey?: string;
  labelKey?: string;
} & React.HTMLAttributes<HTMLDivElement> &
  // Recharts typing is broken → minimal any
  Partial<any>;

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  ChartTooltipContentProps
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      formatter,
      color,
      nameKey,
    },
    ref,
  ) => {
    const { config } = useChart();
    const items = (payload ?? []) as any[];

    if (!active || !items.length) return null;

    const tooltipLabel = !hideLabel ? label : null;

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] gap-1.5 rounded-lg border bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className,
        )}
      >
        {tooltipLabel && (
          <div className="font-medium">{tooltipLabel}</div>
        )}

        <div className="grid gap-1.5">
          {items.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || index}`;
            const itemConfig =
              config[key] ?? config[item.dataKey as string];
            const indicatorColor =
              color || item.payload?.fill || item.color;

            return (
              <div
                key={index}
                className={cn(
                  "flex items-center gap-2",
                  indicator === "dot" && "items-center",
                )}
              >
                {!hideIndicator && (
                  <div
                    className={cn("shrink-0 rounded-sm", {
                      "h-2.5 w-2.5": indicator === "dot",
                      "w-1 h-4": indicator === "line",
                      "w-0 h-4 border border-dashed": indicator === "dashed",
                    })}
                    style={{ backgroundColor: indicatorColor }}
                  />
                )}

                <span className="text-muted-foreground">
                  {itemConfig?.label ?? item.name}
                </span>

                {item.value != null && (
                  <span className="ml-auto font-mono tabular-nums">
                    {formatter
                      ? formatter(item.value, item.name, item, index)
                      : item.value}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);
ChartTooltipContent.displayName = "ChartTooltip";

/* -------------------------------- Legend -------------------------------- */

const ChartLegend = RechartsPrimitive.Legend;

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  {
    payload?: any[];
    verticalAlign?: "top" | "bottom";
    hideIcon?: boolean;
    nameKey?: string;
  } & React.HTMLAttributes<HTMLDivElement>
>(
  (
    {
      className,
      payload = [],
      verticalAlign = "bottom",
      hideIcon = false,
      nameKey,
    },
    ref,
  ) => {
    const { config } = useChart();
    if (!payload.length) return null;

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center gap-4",
          verticalAlign === "top" ? "pb-3" : "pt-3",
          className,
        )}
      >
        {payload.map((item, index) => {
          const key = `${nameKey || item.dataKey || index}`;
          const itemConfig = config[key];

          return (
            <div key={index} className="flex items-center gap-1.5">
              {!hideIcon && (
                <div
                  className="h-2 w-2 rounded-sm"
                  style={{ backgroundColor: item.color }}
                />
              )}
              <span className="text-xs">
                {itemConfig?.label ?? item.value}
              </span>
            </div>
          );
        })}
      </div>
    );
  },
);
ChartLegendContent.displayName = "ChartLegend";

/* -------------------------------- Exports -------------------------------- */

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};
