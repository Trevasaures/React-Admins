import { useTheme } from '@mui/material';
import { ResponsiveBar } from '@nivo/bar';
import { tokens } from '../theme';
import { mockBarData as data } from '../data/mockData';

const BarChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });

  return (
    <ResponsiveBar
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.trueGray[100],
            },
          },
          legend: {
            text: {
              fill: colors.trueGray[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.trueGray[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.trueGray[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.trueGray[100],
          },
        },
        tooltip: {
          container: {
            background: '#222',
            color: '#fff',
            fontSize: 12,
            padding: '6px 12px',
            borderRadius: '4px',
          },
        },
      }}
      keys={['Sales', 'Expenses', 'Profit']}
      indexBy="Region"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'nivo' }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{ theme: 'grid.line.stroke' }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Regions',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 30,
        legend: 'Metrics',
        legendPosition: 'middle',
        legendOffset: -55,
      }}
      label={(bar) => currencyFormatter.format(bar.value)}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      tooltip={({ id, value, indexValue, color }) => (
        <div
          style={{
            background: '#222',
            padding: '6px 12px',
            borderRadius: '4px',
            color: '#fff',
            border: `1px solid ${color}`,
          }}
        >
          <strong>{id}</strong>: {currencyFormatter.format(value)}
          <br />
          <em>Region: {indexValue}</em>
        </div>
      )}
      isInteractive={true}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        `${e.id}: ${currencyFormatter.format(e.formattedValue)} in region: ${e.indexValue}`
      }
    />
  );
};

export default BarChart;
