/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-18 15:56:53
 * Copyright © YourCompanyName All rights reserved
 */
import React from "react";
import classNames from "classnames";
import { useInitOption } from "../hooks/useInitOption";
import { IBaseChart } from "../types";

/**
 * @description: 柱状图
 * @param {IBaseChart} props.option
 * @return {JSX.Element}
 */
function BaseChart(props: IBaseChart): JSX.Element {
  const { chartId } = useInitOption(props);

  const { containerClass } = props;

  
  return (
    <div
      id={chartId}
      className={classNames(containerClass ? containerClass : "")}
    ></div>
  );
}
export { BaseChart };
