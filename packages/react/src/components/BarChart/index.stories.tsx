import React from 'react';
// import CustomMDXDocumentation from './Bar.stories.mdx';
import { BarChart as Chart } from './index';
const Template = (args: any) => (
  <div
    style={{
      width: '100vh',
      height: '600px',
    }}
  >
    <Chart {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  yField: ['hot'],
};
