import * as React from 'react';
import styles from '../../styles/components/logo.module.scss';

export interface LogoProps {
  width: number;
  height: number;
}

export const Logo: React.FC<LogoProps> = ({ width, height }): JSX.Element => {
  return (
    <a href="#" style={{ width, height, display: 'block' }}>
      <div className={styles.background} style={{ width, height }}>
        <div className={styles.inside}>B</div>
      </div>
    </a>
  );
};
