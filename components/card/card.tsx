import * as React from 'react';
import styles from '../../styles/components/card.module.scss';
import { IconButton } from '../button/icon-button';
import { MdPlayArrow as PlayIcon } from 'react-icons/md';
import { Button } from '../button/button';

export interface CardProps {
  title: string;
  video?: {
    src: string;
  };
  background: string;
  variant: 'tall' | 'small' | 'medium';
  button?: {
    text: string;
    onClick: () => unknown;
  };
}

export const Card: React.FC<CardProps> = ({
  title,
  background,
  video,
  variant,
  button
}): JSX.Element => {
  const getVariantClass = () => {
    switch (variant) {
      case 'tall':
        return styles.vTall;
      case 'medium':
        return styles.vMedium;
      case 'small':
        return styles.vSmall;
    }
  };

  return (
    <section
      className={`${styles.card} ${getVariantClass()}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <section className={styles.title}>{title}</section>
      {button && (
        <section className={styles.buttonContainer}>
          <Button onClick={button.onClick} text={button.text} alt />
        </section>
      )}
      <div className={styles.gap} />
      <section className={styles.iconButtonContainer}>
        {video && (
          <IconButton
            icon={<PlayIcon />}
            variant={'filled'}
            alt
            large
            data-testid="play-button"
          />
        )}
      </section>
    </section>
  );
};
