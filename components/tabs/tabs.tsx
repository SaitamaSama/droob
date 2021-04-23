import * as React from 'react';
import styles from '../../styles/components/tabs.module.scss';
import { Tab, TabProps } from './tab';

export interface TabsProps {
  tabs: Array<{
    id: any;
    text: string;
  }>;
  onChange: (id: any) => unknown;
  active: any;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  onChange,
  active
}): JSX.Element => {
  return (
    <section className={styles.tabsContainer}>
      {tabs.map((tab) => (
        <Tab
          onClick={() => onChange(tab.id)}
          text={tab.text}
          active={tab.id === active}
          key={tab.id}
        />
      ))}
    </section>
  );
};
