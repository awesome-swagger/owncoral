import type React from 'react';
import { Center, Text, useColorModeValue } from '@chakra-ui/react';
import { getColor } from '@chakra-ui/theme-tools';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { curveBasis } from '@visx/curve';
import { Group } from '@visx/group';
import { scaleBand, scaleLinear } from '@visx/scale';
import { AreaClosed, Bar } from '@visx/shape';
import { defaultStyles, Tooltip, withTooltip } from '@visx/tooltip';
import type { WithTooltipProvidedProps } from '@visx/tooltip/lib/enhancers/withTooltip';
import type { NumberValue } from 'd3-scale';
import { format } from 'date-fns';

import theme from '../../theme';
import { chartData, ChartDataT } from './fakeChartData';

type PortfolioChartProps = {
  color: string;
  bgColor: string;

  primaryColor: string;
  secondaryColor: string;

  width: number;
  height: number;
  marginTop: number;
  marginBottom: number;
  marginLeft: number;
  marginRight: number;

  numXTicks: number;
  numYTicks: number;
};
export const PortfolioChart = withTooltip<PortfolioChartProps, ChartDataT>(
  (props: PortfolioChartProps & WithTooltipProvidedProps<ChartDataT>) => {
    const expectedFillOpacity = useColorModeValue('0.2', '0.4');

    const colors = Object.fromEntries(
      ['color', 'primaryColor', 'secondaryColor', 'bgColor'].map((k) => [
        k,
        // @ts-ignore
        getColor(theme, props[k]),
      ]),
    );

    const { tooltipData, tooltipLeft, tooltipTop, tooltipOpen, showTooltip, hideTooltip } = props;

    const tooltipStyles = {
      ...defaultStyles,
      minWidth: 60,
      backgroundColor: colors.bgColor,
      color: colors.color,
      boxShadow: theme.shadows.xs,
    };

    const {
      width,
      height,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      numXTicks,
      numYTicks,
    } = props;

    // Then we'll create some bounds
    const xMax = width - marginLeft - marginRight;
    const yMax = height - marginTop - marginBottom;

    // We'll make some helpers to get at the data we want
    const x = (d: ChartDataT) => d.t;
    const y = (d: ChartDataT) => d.actual;

    const paddingInner = 0.35;
    // And then scale the graph by our data
    const xScale = scaleBand({
      range: [0, xMax],
      round: true,
      domain: chartData.map(x),
      paddingInner: paddingInner,
      paddingOuter: -(1 - paddingInner) / 2,
    });
    const yScale = scaleLinear({
      range: [yMax, 0],
      round: true,
      domain: [0, Math.max(...chartData.map(y))],
    });

    const xPoint = (d: ChartDataT) => xScale(x(d));
    const yPoint = (d: ChartDataT) => yScale(y(d));

    const formatDate = (t: Date) => format(t, 'MMM');
    const formatMoney = (m: NumberValue) => `$${m}`;

    return (
      <div>
        <svg width={width} height={height}>
          <Group left={marginLeft} top={marginTop}>
            <AreaClosed<ChartDataT>
              curve={curveBasis}
              data={chartData}
              x={(d) => (xPoint(d) || 0) + xScale.bandwidth() / 2}
              y={(d) => yScale(d.expected)}
              yScale={yScale}
              fill={colors.secondaryColor}
              fillOpacity={expectedFillOpacity}
              shapeRendering="geometricPrecision"
            />
          </Group>

          <Group left={marginLeft} top={marginTop}>
            {chartData.slice(1, chartData.length - 1).map((d, i) => {
              // @ts-ignore
              const barHeight = yMax - yPoint(d);
              return (
                <Bar
                  key={d.t.toString()}
                  x={xPoint(d)}
                  y={yMax - barHeight}
                  height={barHeight}
                  width={xScale.bandwidth()}
                  fill={colors.primaryColor}
                  onMouseOut={hideTooltip}
                  onMouseOver={(e) => {
                    const top = (yMax - marginTop - marginBottom) / 2;
                    const left = (xPoint(d) || 0) + marginLeft;
                    showTooltip({
                      tooltipData: d,
                      tooltipTop: top,
                      tooltipLeft: left,
                    });
                  }}
                />
              );
            })}
          </Group>

          <AxisBottom
            numTicks={numXTicks}
            hideTicks
            scale={xScale}
            top={yMax + marginTop}
            left={marginLeft}
            label=""
            stroke={colors.color}
            tickStroke={colors.color}
            tickFormat={formatDate}
            tickLength={6}
            tickLabelProps={(_, idx) =>
              idx > 0 && idx < chartData.length - 1
                ? {
                    fill: colors.color,
                    fontSize: 12,
                    textAnchor: 'middle',
                  }
                : { fill: 'none' }
            }
          />

          <AxisLeft
            numTicks={numYTicks}
            scale={yScale}
            top={marginTop}
            left={marginLeft}
            label=""
            stroke={colors.color}
            tickStroke={colors.color}
            tickFormat={formatMoney}
            tickLength={6}
            tickLabelProps={(_, idx) =>
              idx % 2 === 0
                ? {
                    fill: colors.color,
                    fontSize: 12,
                    textAnchor: 'end',
                    dy: '0.25rem',
                    dx: '-0.2rem',
                  }
                : { fill: 'none' }
            }
          />
        </svg>
        {(tooltipOpen || true) && tooltipData && (
          <Tooltip top={tooltipTop} left={tooltipLeft} style={tooltipStyles}>
            <Center>
              <Text textStyle="caption">{format(tooltipData.t, `MMM yyyy`)}</Text>
            </Center>
            <Text textStyle="caption" layerStyle="primaryTooltipColor">
              ${tooltipData.actual} distributed
            </Text>
            <Text textStyle="caption" layerStyle="secondaryTooltipColor">
              ${tooltipData.expected} projected
            </Text>
          </Tooltip>
        )}
      </div>
    );
  },
);
