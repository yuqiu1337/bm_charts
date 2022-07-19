import "./App.css";
import { Histogram } from "@bm/chart-react";
import { useEffect, useState } from "react";

function App() {
  const [option, setOption] = useState({});
  const categories = (function () {
    let now = new Date();
    let res = [];
    let len = 10;
    while (len--) {
      res.unshift(now.toLocaleTimeString().replace(/^\D*/, ""));
      now = new Date(+now - 2000);
    }
    return res;
  })();
  const categories2 = (function () {
    let res = [];
    let len = 10;
    while (len--) {
      res.push(10 - len - 1);
    }
    return res;
  })();
  const data = (function () {
    let res = [];
    let len = 10;
    while (len--) {
      res.push(Math.round(Math.random() * 1000));
    }
    return res;
  })();
  const data2 = (function () {
    let res = [];
    let len = 0;
    while (len < 10) {
      res.push(+(Math.random() * 10 + 5).toFixed(1));
      len++;
    }
    return res;
  })();
  const initOption = {
    title: {
      text: "Dynamic Data",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#283b56",
        },
      },
    },
    legend: {},
    toolbox: {
      show: true,
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {},
      },
    },
    dataZoom: {
      show: false,
      start: 0,
      end: 100,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: true,
        data: categories,
      },
      {
        type: "category",
        boundaryGap: true,
        data: categories2,
      },
    ],
    yAxis: [
      {
        type: "value",
        scale: true,
        name: "Price",
        max: 30,
        min: 0,
        boundaryGap: [0.2, 0.2],
      },
      {
        type: "value",
        scale: true,
        name: "Order",
        max: 1200,
        min: 0,
        boundaryGap: [0.2, 0.2],
      },
    ],
    series: [
      {
        name: "Dynamic Bar",
        type: "bar",
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: data,
      },
      {
        name: "Dynamic Line",
        type: "line",
        data: data2,
      },
    ],
  };
  useEffect(() => {
    setInterval(() => {
      let axisData = new Date().toLocaleTimeString().replace(/^\D*/, "");
      data.shift();
      data.push(Math.round(Math.random() * 1000));
      data2.shift();
      data2.push(+(Math.random() * 10 + 5).toFixed(1));
      categories.shift();
      categories.push(axisData);
      categories2.shift();
      const newData = {
        xAxis: [
          {
            data: categories,
          },
          {
            data: categories2,
          },
        ],
        series: [
          {
            data: data,
          },
          {
            data: data2,
          },
        ],
      };
      let count = 11;
      // console.log(newData);
      categories2.push(count++);
      setOption(newData);
      // console.log(option);
    }, 1500);
  }, []);
  console.log(option);
  return (
    <div className="App">
      <div className="App-header">
        <div
          style={{
            width: "100%",
            height: 400,
          }}
        >
          <Histogram
            theme="vintage"
            containerClass="his1"
            option={initOption}
            data={option}
          ></Histogram>
        </div>
        <div
          style={{
            width: "50vw",
            height: "20vh",
          }}
        >
          <Histogram
            theme="dark"
            containerClass="his2"
            option={initOption}
            data={option}
          ></Histogram>
        </div>
        <div
          style={{
            width: 400,
            height: 400,
          }}
        >
          <Histogram
            containerClass="his3"
            theme="roma"
            option={initOption}
            data={option}
          ></Histogram>
        </div>
        <div
          style={{
            width: 1280,
            height: 400,
          }}
        >
          <Histogram
            theme="shine"
            containerClass="his4"
            option={initOption}
            data={option}
          ></Histogram>
        </div>
      </div>
    </div>
  );
}

export default App;
