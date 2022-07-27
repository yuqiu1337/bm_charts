import React, { useState } from 'react';
import styles from './LineChart.css';
import { LineChart } from '@agito/chart-react';
import { createData, createXAxis } from './utils';
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
          legendPosition={position}
          xAxis={{ data: createXAxis() }}
          chartData={[{ name: '柱状图', data: createData() }]}
        />
      </div>
      <div style={{ width: '100%', height: '400px' }}>
        <LineChart
          chartType="lineArea"
          title={'折线面积图'}
          mainColor={'#39C5BB'}
          legendPosition={position}
          xAxis={{ data: createXAxis() }}
          chartData={[...createData()]}
        />
      </div>
      <div style={{ width: '100%', height: '400px' }}>
        <LineChart
          chartType="smoothed"
          legendPosition={position}
          hiddenLegend={false}
          xAxis={{ data: createXAxis() }}
          chartData={[{ name: '柱状图', data: createData() }]}
        />
      </div>
      <div style={{ width: '100%', height: '400px' }}>
        <LineChart
          // mainColor={'#000000'}
          chartType="smoothedArea"
          hiddenLegend={false}
          xAxis={{ data: createXAxis() }}
          chartData={[
            { name: '零号', data: createData(), color: '#75409a' },
            { name: '初号', data: createData(), color: '#39C5BB' },
          ]}
        />
      </div>
    </>
  );
}
// export default function Page() {
//   return (
//     <div>
//       <h1 className={styles.title}>Page LineChart</h1>
//       <div
//         style={{
//           width: '50vw',
//           height: '500px',
//         }}
//       >
//         <LineChart
//           legendPosition="left"
//           containerClass={'LineChart'}
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
