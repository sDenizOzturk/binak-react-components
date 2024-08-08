import { FC, ReactNode } from 'react';
import classes from './BaseFooter.module.css';
interface BaseFooterProps {
  leftContent?: ReactNode;
  rightContent?: ReactNode;
}

export const BaseFooter: FC<BaseFooterProps> = ({
  leftContent,
  rightContent,
  ...props
}) => {
  return (
    <footer className={classes['base-footer']} {...props}>
      <nav>
        <ul>
          <li>{leftContent}</li>
        </ul>
        <ul>
          <li>{rightContent}</li>
        </ul>
      </nav>
    </footer>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const footerActiveStyle = {
  border: '1px solid var(--color2)',
  color: 'var(--color2)',
  borderRadius: 0,
  background: 0,
};
