// import styles from './index.less';
// import { PlainChart } from '@agito/chart-react';
// import React, { useEffect, useState } from 'react';
// import { routes } from '../../config';
// // console.log(routes)
// export default function IndexPage() {
//   const [option, setOption] = useState({});
//   const categories = (function () {
//     let now = new Date();
//     const res = [];
//     let len = 10;
//     while (len--) {
//       res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
//       now = new Date(+now - 2000);
//     }
//     return res;
//   })();
//   const categories2 = (function () {
//     const res = [];
//     let len = 10;
//     while (len--) {
//       res.push(10 - len - 1);
//     }
//     return res;
//   })();
//   const data = (function () {
//     const res = [];
//     let len = 10;
//     while (len--) {
//       res.push(Math.round(Math.random() * 1000));
//     }
//     return res;
//   })();
//   const data2 = (function () {
//     const res = [];
//     let len = 0;
//     while (len < 10) {
//       res.push(+(Math.random() * 10 + 5).toFixed(1));
//       len++;
//     }
//     return res;
//   })();
//   const initOption = {
//     title: {
//       text: 'Dynamic Data',
//     },
//     tooltip: {
//       trigger: 'axis',
//       axisPointer: {
//         type: 'cross',
//         label: {
//           backgroundColor: '#283b56',
//         },
//       },
//     },
//     legend: {},
//     toolbox: {
//       show: true,
//       feature: {
//         dataView: { readOnly: false },
//         restore: {},
//         saveAsImage: {},
//       },
//     },
//     dataZoom: {
//       show: false,
//       start: 0,
//       end: 100,
//     },
//     xAxis: [
//       {
//         type: 'category',
//         boundaryGap: true,
//         data: categories,
//       },
//       {
//         type: 'category',
//         boundaryGap: true,
//         data: categories2,
//       },
//     ],
//     yAxis: [
//       {
//         type: 'value',
//         scale: true,
//         name: 'Price',
//         max: 30,
//         min: 0,
//         boundaryGap: [0.2, 0.2],
//       },
//       {
//         type: 'value',
//         scale: true,
//         name: 'Order',
//         max: 1200,
//         min: 0,
//         boundaryGap: [0.2, 0.2],
//       },
//     ],
//     series: [
//       {
//         name: 'Dynamic Bar',
//         type: 'bar',
//         xAxisIndex: 1,
//         yAxisIndex: 1,
//         data: data,
//       },
//       {
//         name: 'Dynamic Line',
//         type: 'line',
//         data: data2,
//       },
//     ],
//   };

//   useEffect(() => {
//     setInterval(() => {
//       const axisData = new Date().toLocaleTimeString().replace(/^\D*/, '');
//       data.shift();
//       data.push(Math.round(Math.random() * 1000));
//       data2.shift();
//       data2.push(+(Math.random() * 10 + 5).toFixed(1));
//       categories.shift();
//       categories.push(axisData);
//       categories2.shift();
//       const newData = {
//         xAxis: [
//           {
//             data: categories,
//           },
//           {
//             data: categories2,
//           },
//         ],
//         series: [
//           {
//             data: data,
//           },
//           {
//             data: data2,
//           },
//         ],
//       };
//       let count = 11;
//       // console.log(newData);
//       categories2.push(count++);
//       setOption(newData);
//       // console.log(option);
//     }, 1500);
//   }, []);

//   return (
//     <div className="App">
//       <div className="App-header">
//         {routes.map((r) => (
//           <p>
//             <a href={r.path}>{r.path}</a>
//           </p>
//         ))}
//       </div>
//       <div className="App-header">
//         <div
//           style={{
//             width: '100%',
//             height: 400,
//           }}
//         >
//           <PlainChart
//             theme="vintage"
//             containerClass="his1"
//             initOptions={initOption}
//             data={option}
//           ></PlainChart>
//         </div>
//         {/* <div
//           style={{
//             width: '50vw',
//             height: '20vh',
//           }}
//         >
//           <PlainChart
//             theme="dark"
//             containerClass="his2"
//             initOptions={initOption}
//             data={option}
//           ></PlainChart>
//         </div>
//         <div
//           style={{
//             width: 400,
//             height: 400,
//           }}
//         >
//           <PlainChart
//             containerClass="his3"
//             theme="roma"
//             initOptions={initOption}
//             data={option}
//           ></PlainChart>
//         </div>
//         <div
//           style={{
//             width: 1280,
//             height: 400,
//           }}
//         >
//           <PlainChart
//             theme="shine"
//             containerClass="his4"
//             initOptions={initOption}
//             data={option}
//           ></PlainChart>
//         </div> */}
//       </div>
//     </div>
//   );
// }
