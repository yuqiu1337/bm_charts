import React, { useState } from 'react';
import styles from './PieChart.css';
import { PieChart } from '@agito/chart-react';
import { createData, createXAxis, createPieData } from './utils';
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
      <div style={{ width: '100%', height: '400px' }}>
        <PieChart
          nameField="category"
          chartData={createPieData()}
          mode="top"
          topCount={4}
        />
      </div>
      <div style={{ width: '100%', height: '400px' }}>
        <PieChart mode="top" chartType="doughnut" chartData={createPieData()} />
      </div>
      <div style={{ width: '100%', height: '400px' }}>
        <PieChart chartType="nightingale" chartData={createPieData()} />
      </div>
    </>
  );
}
