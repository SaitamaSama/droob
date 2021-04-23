import * as React from 'react';
import styles from '../styles/index.module.scss';
import { Sidebar } from '../components/sidebar/sidebar';
import { Content } from '../components/content/content';

const IndexPage: React.FC<Record<string, unknown>> = (): JSX.Element => {
  return (
    <section className={styles.container}>
      <Sidebar />
      <Content />
    </section>
  );
};

export default IndexPage;
