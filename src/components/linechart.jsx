import { ResponsiveLine } from "@nivo/line";
import { useTheme, Box, Typography } from "@mui/material";
import { tokens } from "../theme";
import { mockLineData as data } from "../data/mockData";

const formatCurrency = (n) =>
  `$${Number(n).toLocaleString("en-US", { maximumFractionDigits: 0 })}`;

const LineChart = ({ isCustomLineColors = false, isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // If your tokens use `gray`, change all `grey` to `gray`
  const g = colors.gray ?? colors.grey; // <- safety shim

  return (
    <Box position="relative" height="100%">
      <ResponsiveLine
        data={data}
        theme={{
          textColor: g?.[100] || "#cfcfcf",
          axis: {
            domain: { line: { stroke: g?.[100] || "#cfcfcf" } },
            legend: { text: { fill: g?.[100] || "#cfcfcf" } },
            ticks: {
              line: { stroke: g?.[100] || "#cfcfcf", strokeWidth: 1 },
              text: { fill: g?.[100] || "#cfcfcf" },
            },
          },
          legends: { text: { fill: g?.[100] || "#cfcfcf" } },
          grid: { line: { stroke: g?.[700] || "#333", strokeDasharray: "3 6" } },
          tooltip: { container: { background: "#222", color: "#fff" } },
          crosshair: { line: { stroke: "#888", strokeWidth: 1 } },
        }}
        colors={isDashboard ? { datum: "color" } : { scheme: "category10" }}

        /* ---- Dates: parse ISO strings on x ---- */
        xScale={{ type: "time", format: "%Y-%m-%d", precision: "day" }}
        xFormat="time:%b %Y"
        axisBottom={{
          orient: "bottom",
          tickSize: 0,
          tickPadding: 8,
          tickRotation: 0,
          format: "%b", // Jan, Feb, ...
          legend: isDashboard ? undefined : "Month",
          legendOffset: 36,
          legendPosition: "middle",
        }}

        /* ---- Money: format y as currency ---- */
        yScale={{ type: "linear", min: "auto", max: "auto", stacked: false }}
        yFormat={(v) => formatCurrency(v)}
        axisLeft={{
          orient: "left",
          tickSize: 3,
          tickPadding: 6,
          tickRotation: 0,
          format: (v) => (v >= 1000 ? `$${(v / 1000).toFixed(0)}k` : `$${v}`),
          legend: isDashboard ? undefined : "Amount (USD)",
          legendOffset: -50,
          legendPosition: "middle",
        }}

        /* ---- Interaction & visuals ---- */
        margin={{ top: 50, right: 100, bottom: 60, left: 70 }}
        curve="monotoneX"
        enableGridX={false}
        enableGridY={true}
        lineWidth={3}
        pointSize={8}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        useMesh={true}
        enableSlices="x"
        crosshairType="x"
        animate={true}
        motionConfig="gentle"

        tooltip={({ point }) => {
          const { serieId, data, color } = point;
          return (
            <div
              style={{
                padding: "8px 12px",
                background: "#222",
                color: "#fff",
                border: `1px solid ${color}`,
                borderRadius: 4,
                fontSize: 12,
              }}
            >
              <div style={{ fontWeight: 700, marginBottom: 4 }}>{serieId}</div>
              <div><strong>{data.xFormatted}</strong></div>
              <div>{formatCurrency(data.y)}</div>
            </div>
          );
        }}

        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            translateX: 100,
            itemWidth: 80,
            itemHeight: 20,
            symbolSize: 12,
            symbolShape: "circle",
            itemOpacity: 0.9,
          },
        ]}

        markers={[
          {
            axis: "y",
            value: 20000,
            lineStyle: { stroke: "#888", strokeDasharray: "4 8", strokeWidth: 1 },
            legend: "Target $20k",
            legendPosition: "top-left",
            legendOrientation: "horizontal",
            textStyle: { fill: g?.[100] || "#cfcfcf" },
          },
        ]}
      />

      {/* Optional small title overlay */}
      {!isDashboard && (
        <Box
          position="absolute"
          top={8}
          left="50%"
          sx={{ transform: "translateX(-50%)", pointerEvents: "none" }}
        >
          <Typography variant="subtitle1" fontWeight={700}>
            Monthly Performance
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default LineChart;