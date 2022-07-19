/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-18 15:56:53
 * Copyright © YourCompanyName All rights reserved
 */
import React from "react";
import { useInitOption } from "../hooks/useInitOption";
import { IHistogram } from "../types";

/**
 * @description: 柱状图
 * @param {IHistogram} props.option
 * @return {JSX.Element}
 */
function Histogram(props: IHistogram): JSX.Element {
  const { chartId } = useInitOption(props);

  return (
    <div
      style={{ height: "100%", width: "100%" }}
      id={chartId}
      className=""
    ></div>
  );
}
export { Histogram };
