import React from 'react';
import styles from './barChart.css';
import { BarChart } from '@agito/chart-react';



export default function Page() {

  return (
    <div>
      <h1 className={styles.title}>Page barChart</h1>
      <div
        style={{
          width: '50vw',
          height: '500px',
        }}
      >
        <BarChart
          legendPosition="left"
          direction="vertical"
          containerClass={'barChart'}
          chartData={[{ data: [41.1, 30.4, 65.1, 53.3] }]}
          params={{}}
          headers={{}}
          action={''}
          dataOnLoad={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </div>
    </div>
  );
}
