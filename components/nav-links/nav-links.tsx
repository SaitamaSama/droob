import * as React from 'react';
import styles from '../../styles/components/nav-links.module.scss';
import { Button } from '../button/button';

export interface NavLinksProps {}

export const NavLinks: React.FC<NavLinksProps> = ({}): JSX.Element => {
  const items = [
    {
      text: 'Motivation',
      active: true
    },
    {
      text: 'Productivity',
      button: {
        label: 'Click here!',
        onClick: () => {}
      },
      active: false
    },
    {
      text: 'Design',
      active: false
    },
    {
      text: 'Study',
      active: false
    }
  ];

  return (
    <section className={styles.navLinks}>
      {items.map((item) => (
        <a
          href="#"
          className={`${styles.navLink} ${item.active && styles.active}`}
          key={item.text}
        >
          <div className={styles.text}>{item.text}</div>
          <div className={styles.gap} />
          {item.button ? (
            <section className={styles.buttonContainer}>
              <Button onClick={item.button.onClick} text={item.button.label} />
            </section>
          ) : (
            <section className={styles.buttonContainer}>
              <div className={styles.dummyButton} />
            </section>
          )}
        </a>
      ))}
    </section>
  );
};
