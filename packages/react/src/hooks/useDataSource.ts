import { IChartSource } from '@/types';
import { useEffect, useState } from 'react';

export function useDataSource(props: IChartSource) {
  const [loading, setLoading] = useState(false);

  const [dataset, setDataset] = useState(() => props.chartData ?? {});

  const {
    builtSource = true,
    action = 'https://tenapi.cn/bilihot/',
    header = {},
    params = {},
    method = 'get',
    chartData = {},
  } = props;

  useEffect(() => {
    if (builtSource) {
      setLoading(true);
      fetch(action)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          // console.log(data);
          setLoading(false);
          if (res.data == 200) {
            setDataset(res.list);
          }
        });
    }
  }, []);

  return {
    dataset,
    loading,
  };
}
