import { renderHook, act } from '@testing-library/react-hooks';
import { useDataSource } from './useDataSource';
test('useDataSource', async () => {
  const data = {
    action: 'https://tenapi.cn/resou/',
    chartData: {},
  };
  const { result, waitForNextUpdate } = renderHook(() => useDataSource(data));

  expect(result.current.loading).toEqual(true);
  await waitForNextUpdate({ timeout: 1000 * 20 });

  expect(result.current.loading).toEqual(false);

  expect(result.current.dataset.length).toBeGreaterThan(0);
});
