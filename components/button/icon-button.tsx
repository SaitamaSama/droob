import * as React from 'react';
import styles from '../../styles/components/button.module.scss';

export interface IconButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  icon: React.ReactChild;
  variant: 'filled' | 'outline';
  alt?: boolean;
  large?: boolean;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  variant,
  alt,
  large,
  ...props
}): JSX.Element => {
  return (
    <button
      className={`${styles.iconButton} ${
        variant === 'filled' ? styles.filled : styles.outlined
      } ${alt && styles.alt} ${large && styles.large}`}
      {...props}
    >
      {icon}
    </button>
  );
};
