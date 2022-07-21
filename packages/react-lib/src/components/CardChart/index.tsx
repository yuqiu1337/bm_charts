import React from 'react';
import styles from './style.less';

type Props = {
  source:string,
  title:string
}

const CardChart = (props: Props) => {

  const { source,title } = props;

  return(
    <div className={styles.card_chart}>
      <div className={styles.title}>
        {title}
      </div>
    </div>
  )
};
export default CardChart;

