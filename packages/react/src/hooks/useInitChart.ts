import { debounce } from 'lodash';
import { useState, useLayoutEffect, useEffect, useCallback } from 'react';
import { getUniqueId } from '@agito/chart-shared';
import BmChart from '@agito/chart-core';
import { IChartCommon } from '../types';

/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-19 10:19:06
 * Copyright © YourCompanyName All rights reserved
 */
function useInitChart(props: IChartCommon) {
  const [chartId] = useState(() => getUniqueId());
  const [bmChart, setBmChart] = useState(() => new BmChart());
  const { initOptions, theme } = props;
  /** 组件渲染后执行 */
  useLayoutEffect(() => {
    if (!bmChart) {
      const bmChart = new BmChart();
      setBmChart(bmChart);
    }
    if (chartId) {
      const ele = document.getElementById(chartId);
      if (ele && initOptions) {
        bmChart.init({ ele, option: initOptions, theme });
        bmChart.resize();
        window.addEventListener('resize', handlerResize);
      }

      return () => {
        window.removeEventListener('resize', handlerResize);
      };
    }
  }, [chartId, initOptions]);

  useEffect(() => {
    if (initOptions) {
      bmChart.setOptionData(initOptions);
      if (!bmChart) {
        setBmChart(bmChart);
      }
    }
  }, [JSON.stringify(initOptions)]);

  /** 更改大小控制 */
  const handlerResize = useCallback(
    debounce(() => {
      bmChart.resize();
    }, 350),
    [],
  );

  return {
    bmChart,
    chartId,
  };
}
export default useInitChart;
