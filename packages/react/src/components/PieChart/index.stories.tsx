import React from 'react';
// import { storiesOf } from '@storybook/react';
import { PieChart as Chart } from './index';
// export default {
//   component: Chart,
//   title: 'PieChart',
// } as Meta;

function createPieData() {
  return Array(7)
    .fill('')
    .map(() => {
      return {
        name: '_' + Math.random().toString(36).substring(2),
        category: '_ca_' + Math.random().toString(36).substring(2),
        value: Math.floor(Math.random() * 100),
        value2: Math.floor(Math.random() * 100),
      };
    });
}

const pieData = createPieData();

const Template = (args) => (
  <div
    style={{
      width: '400px',
      height: '600px',
    }}
  >
    <Chart {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  mode: 'all',
  chartData: pieData,
  builtSource: false,
};

export const CustomTopCount = Template.bind({});
CustomTopCount.args = {
  ...Default.args,
  mode: 'top',
  topCount: 3,
};

export const ChartType = Template.bind({});
ChartType.args = {
  ...Default.args,
  chartType: 'doughnut',
};
