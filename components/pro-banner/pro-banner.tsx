import * as React from 'react';
import styles from '../../styles/components/pro-banner.module.scss';
import { VscRocket as RocketIcon } from 'react-icons/vsc';
import { Button } from '../button/button';

export interface ProBannerProps {}

export const ProBanner: React.FC<ProBannerProps> = ({}): JSX.Element => {
  return (
    <section className={styles.proBanner}>
      <section className={styles.iconContainer}>
        <RocketIcon className={styles.icon} />
      </section>
      <section className={styles.details}>
        <p className={styles.text}>Pro account is more powerful. Get 30% off</p>
        <Button onClick={() => {}} text={'Get Pro'} alt />
      </section>
    </section>
  );
};
