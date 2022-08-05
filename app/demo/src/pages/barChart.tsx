import React, { useState } from 'react';
import styles from './barChart.css';
import { BarChart } from '@agito/chart-react';
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
      {/* <div style={{ width: '100%', height: '400px' }}>
        <BarChart hiddenLegend={false} chartData={[...createPieData()]} />
      </div>
      <div style={{ width: '100%', height: '400px' }}>
        <BarChart
          hiddenLegend={false}
          yField={['value', 'value2']}
          chartData={[...createPieData()]}
        />
      </div>
      <div style={{ width: '100%', height: '400px' }}>
        <BarChart hiddenLegend={false} chartData={[...createPieData()]} />
      </div>
      <div style={{ width: '100%', height: '400px' }}>
        <BarChart hiddenLegend={false} chartData={[...createPieData()]} />
      </div>
      <div style={{ width: '100%', height: '400px' }}>
        <BarChart hiddenLegend={false} chartData={[...createPieData()]} />
      </div> */}
      <div style={{ width: '100%', height: '400px' }}>
        <BarChart hiddenLegend={false} action="https://tenapi.cn/resou/" yField={['hot']}/>
      </div>
    </>
  );
}
