// @flow strict
import React from 'react';
import styles from './Meta.module.scss';

type Props = {
  date: string
};

//게시일 표기
const Meta = ({ date }: Props) => (
  <div className={styles['meta']}>
    <p className={styles['meta__date']}>{new Date(date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
  </div>
);

export default Meta;
