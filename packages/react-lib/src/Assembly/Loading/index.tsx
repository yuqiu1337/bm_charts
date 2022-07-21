import React from 'react';
import styles from './style.less';

type Props = {
  visible:boolean,
  children:any
}

const Loading = (props:Props) => {

  const { visible,children } = props;

  return(
    <div >
      {children}
      <div className={styles.loading_content}>


      </div>
    </div>
  )
}

export default Loading;
