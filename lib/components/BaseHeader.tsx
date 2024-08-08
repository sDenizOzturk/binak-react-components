import { FC, ReactNode } from 'react';
import classes from './BaseHeader.module.css';
import { useMediaQuery } from 'usehooks-ts';

interface BaseHeaderProps {
  leftContent?: ReactNode;
  rightContent?: ReactNode;
}

export const BaseHeader: FC<BaseHeaderProps> = ({
  leftContent,
  rightContent,
  ...props
}) => {
  const isPortrait = useMediaQuery('(orientation: portrait)');

  return (
    <header className={classes['base-header']} {...props}>
      <nav style={isPortrait ? { width: '100%' } : {}}>
        <ul>
          <li>{leftContent}</li>
        </ul>
        <ul>
          <li>{rightContent}</li>
        </ul>
      </nav>
    </header>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const headerActiveStyle = { border: '1px solid var(--color3)' };
