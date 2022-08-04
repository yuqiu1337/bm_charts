import React, { useState } from 'react';
import styles from './LineChart.css';
import { LineChartV2 as LineChart } from '@agito/chart-react';
import { createData, createPieData, createXAxis } from './utils';
const legendPosition = [
  { label: '图例在上', value: 'top' },
  { label: '图例在下', value: 'bottom' },
  { label: '图例在左', value: 'left' },
  { label: '图例在右', value: 'right' },
];

export default function Page() {
  const [position, setPosition] = useState('top');
  const changePosition = (positionValue: React.SetStateAction<string>) => {
    setPosition(positionValue);
  };
  return (
    <>
      <div>
        {legendPosition.map((item) => {
          return (
            <button onClick={() => changePosition(item.value)} key={item.value}>
              {item.label}
            </button>
          );
        })}
      </div>
      <div style={{ width: '100%', height: '400px' }}>
        <LineChart
          title='11'
          legendPosition={position}
          chartConfig={{
            series: [{ type: 'line' }],
          }}
          // xAxis={{ data: createXAxis() }}
          chartData={[...createPieData()]}
        />
      </div>
      <div style={{ width: '100%', height: '400px' }}>
        <LineChart
          title='11'
          legendPosition={position}
          chartConfig={{
            series: [{ type: 'line', name: '11' }, { type: 'line' }],
          }}
          xField="name"
          yField={['value', 'value2']}
          // xAxis={{ data: createXAxis() }}
          chartData={[...createPieData()]}
        />
      </div>
      <div style={{ width: '100%', height: '400px' }}>
        <LineChart
          title='11'
          legendPosition={position}
          chartConfig={{
            series: [{ type: 'line', name: '11' }, { type: 'line' }],
          }}
          xField="name"
          yField={['value', 'value2']}
          // xAxis={{ data: createXAxis() }}
          chartData={[...createPieData()]}
        />
      </div>
      <div style={{ width: '100%', height: '400px' }}>
        <LineChart
          title='11'
          legendPosition={position}
          chartConfig={{
            series: [{ type: 'line', name: '11' }, { type: 'line' }],
          }}
          xField="name"
          yField={['value', 'value2']}
          // xAxis={{ data: createXAxis() }}
          chartData={[...createPieData()]}
        />
      </div>
    </>
  );
}
