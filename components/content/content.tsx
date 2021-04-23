import * as React from 'react';
import styles from '../../styles/components/content.module.scss';
import { Header } from '../header/header';
import { Tabs } from '../tabs/tabs';
import { Button } from '../button/button';
import { Card } from '../card/card';
import { Scrollbars } from 'react-custom-scrollbars';

export interface ContentProps {}
export const Content: React.FC<ContentProps> = ({}): JSX.Element => {
  const [activeTab, setActiveTab] = React.useState<string>('all');

  const tabs = [
    {
      id: 'all',
      text: 'All'
    },
    {
      id: 'articles',
      text: 'Articles'
    },
    {
      id: 'podcast',
      text: 'Podcast'
    },
    {
      id: 'video',
      text: 'Video'
    },
    {
      id: 'downloads',
      text: 'Downloads'
    }
  ];

  return (
    <Scrollbars height={`calc(100vh - 6rem)`} universal>
      <main className={styles.container}>
        <Header />
        <section className={styles.tabsContainer}>
          <Tabs
            tabs={tabs}
            onChange={(id) => setActiveTab(id)}
            active={activeTab}
          />
          <div className={styles.tabButtonContainer}>
            <Button onClick={() => {}} text={'Play all'} wide />
          </div>
        </section>
        <section className={styles.cardGrid}>
          <section className={styles.tallCardCol}>
            <section className={styles.row}>
              <Card
                title={"Your\nlimitation\nit's only\nyour\nimagination."}
                background={`/assets/bg_1.jpg`}
                variant={'tall'}
                video={{
                  src: ''
                }}
              />
            </section>
            <section className={styles.row}>
              <Card
                title={''}
                background={`/assets/bg_2.jpg`}
                variant={'tall'}
              />
            </section>
          </section>
          <section className={styles.shortCardCol}>
            <section className={styles.row}>
              <Card
                title={'Great things\nnever come from\ncomfort zones.'}
                background={`/assets/bg_4.jpg`}
                variant={'small'}
                video={{
                  src: ''
                }}
              />
              <Card
                title={'Dream it.\nWish it.\nDo it.'}
                background={`/assets/bg_2.jpg`}
                variant={'small'}
              />
            </section>
            <section className={styles.row}>
              <Card
                title={'Stay\nFocused.'}
                background={`/assets/bg_5.jpg`}
                variant={'medium'}
                button={{
                  onClick: () => {},
                  text: 'Read Articles'
                }}
              />
            </section>
            <section className={styles.row}>
              <Card
                title={''}
                background={`/assets/bg_3.jpg`}
                variant={'medium'}
              />
            </section>
          </section>
        </section>
      </main>
    </Scrollbars>
  );
};
