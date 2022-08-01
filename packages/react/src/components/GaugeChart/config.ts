import { defaultMainColor } from '../common';

/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-18 17:10:43
 * Copyright © YourCompanyName All rights reserved
 */
export const getChartOptions = function () {
  return {
    ttooltip: {
      formatter: '{a} <br/>{b} : {c}%',
    },
    series: [
      {
        name: 'Pressure',
        type: 'gauge',
        detail: {
          formatter: '{value}',
        },
        data: [
          {
            value: 50,
            name: 'SCORE',
          },
        ],
      },
    ],
  };
};
