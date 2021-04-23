import * as React from 'react';
import styles from '../../styles/components/button.module.scss';

export interface ButtonProps {
  onClick: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => unknown;
  text: React.ReactChild;
  alt?: boolean;
  wide?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  alt,
  onClick,
  text,
  wide
}): JSX.Element => {
  return (
    <button
      className={`${styles.button} ${alt && styles.alt} ${wide && styles.wide}`}
      onClick={(ev) => onClick(ev)}
    >
      {text}
    </button>
  );
};
