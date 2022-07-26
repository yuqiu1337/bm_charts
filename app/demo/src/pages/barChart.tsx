import React, { useState } from 'react';
import styles from './barChart.css';
import { BarChart } from '@agito/chart-react';
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
        <BarChart
          legendPosition={position}
          xAxis={{ data: ['faiz', 'agito'] }}
          chartData={[{ name: '柱状图', data: [50, 30.4, 65.1, 53.3] }]}
        />
      </div>
      <div style={{ width: '100%', height: '400px' }}>
        <BarChart
          mainColor={'#39C5BB'}
          legendPosition={position}
          xAxis={{ data: ['faiz', 'agito'] }}
          chartData={[{ name: '柱状图', data: [2, 30.4, 65.1, 53.3] }]}
        />
      </div>
      <div style={{ width: '100%', height: '400px' }}>
        <BarChart
          legendPosition={position}
          hiddenLegend={false}
          xAxis={{ data: ['faiz', 'agito'] }}
          chartData={[{ name: '柱状图', data: [500, 30.4, 65.1, 53.3] }]}
        />
      </div>
      <div style={{ width: '100%', height: '400px' }}>
        <BarChart
          mainColor={'#000000'}
          xAxis={{ data: ['faiz', 'agito'] }}
          chartData={[{ name: '柱状图', data: [500, 30.4, 65.1, 53.3] }]}
        />
      </div>
    </>
  );
}
// export default function Page() {
//   return (
//     <div>
//       <h1 className={styles.title}>Page barChart</h1>
//       <div
//         style={{
//           width: '50vw',
//           height: '500px',
//         }}
//       >
//         <BarChart
//           legendPosition="left"
//           containerClass={'barChart'}
//           xAxis={{  data: ['faiz', 'agito']}}
//           chartData={[{name:'xiba', data: [41.1, 30.4, 65.1, 53.3] }]}
//           params={{}}
//           headers={{}}
//           action={''}
//           dataOnLoad={function (): void {
//             throw new Error('Function not implemented.');
//           }}
//         />
//       </div>
//     </div>
//   );
// }
