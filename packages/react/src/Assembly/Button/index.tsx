import React from 'react';
import styles from './style.less';

interface Style {
  [propName: string]: string | number
}

type Props = {
  type?:string,
  style?:Style,
  children?:any,
  onClick?:Function,
  //[propName: string]: any
}

const Button = (props:Props) => {

  const { children,onClick,type='default',style={} } = props;

  const handleClick = () => {
    onClick && onClick();
  }

  return(
    <button className={`${styles[type]} ${styles._button}`} style={{...style}} onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button;
