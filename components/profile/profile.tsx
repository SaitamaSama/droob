import * as React from 'react';
import styles from '../../styles/components/profile.module.scss';

export interface ProfileProps {}

export const Profile: React.FC<ProfileProps> = ({}): JSX.Element => {
  return (
    <section className={styles.profile}>
      <div className={styles.imageContainer}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(/assets/dean-amir-hussain.jpg)` }}
        />
      </div>
      <section className={styles.details}>
        <div className={styles.name} data-testid="prof-name">
          Anand Agarwal
        </div>
        <div className={styles.email} data-testid="prof-email">
          anand.a@bk.com
        </div>
      </section>
    </section>
  );
};
