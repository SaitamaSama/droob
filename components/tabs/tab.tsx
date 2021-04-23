import * as React from 'react';
import styles from '../../styles/components/tabs.module.scss';

export interface TabProps {
  onClick: () => unknown;
  text: string;
  active: boolean;
}

export const Tab: React.FC<TabProps> = ({
  onClick,
  active,
  text
}): JSX.Element => {
  return (
    <div
      className={`${styles.tab} ${active && styles.active}`}
      role="button"
      onClick={onClick}
    >
      {text}
    </div>
  );
};
