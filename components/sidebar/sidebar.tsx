import * as React from 'react';
import styles from '../../styles/components/sidebar.module.scss';
import { Logo } from '../logo/logo';
import { Profile } from '../profile/profile';
import { NavLinks } from '../nav-links/nav-links';
import { ProBanner } from '../pro-banner/pro-banner';

export const Sidebar: React.FC<Record<string, unknown>> = (): JSX.Element => {
  return (
    <aside className={styles.sidebar}>
      <Logo width={64} height={64} />
      <div className={styles.gap} />
      <Profile />
      <NavLinks />
      <ProBanner />
      <div className={styles.gap} />
      <section className={styles.logoutContainer}>
        <a href="#">Logout</a>
      </section>
    </aside>
  );
};
