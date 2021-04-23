import * as React from 'react';
import styles from '../../styles/components/header.module.scss';
import Image from 'next/image';
import { IconButton } from '../button/icon-button';
import { MdAdd as AddIcon } from 'react-icons/md';

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}): JSX.Element => {
  const users = [
    {
      name: 'Alex Shaw',
      avatar: '/assets/alex-shaw.jpg'
    },
    {
      name: 'Gryffyn M',
      avatar: '/assets/gryffyn-m.jpg'
    },
    {
      name: 'Joshua McArthur',
      avatar: '/assets/joshua-mcarthur.jpg'
    },
    {
      name: 'Sheikh Asif',
      avatar: '/assets/sheikh-asif.jpg'
    }
  ];

  return (
    <header className={styles.header}>
      <div className={styles.title}>Motivation</div>
      <section className={styles.avatarContainer}>
        <section className={styles.overlaidContainer}>
          {users.map((user, index) => (
            <div
              className={styles.avatar}
              style={{ zIndex: 50 + index }}
              key={user.name}
              data-tip={user.name}
              data-place="bottom"
            >
              <Image
                src={user.avatar}
                width={60}
                height={60}
                className={styles.avatar}
              />
            </div>
          ))}
        </section>
        <IconButton icon={<AddIcon />} variant={'outline'} />
      </section>
    </header>
  );
};
