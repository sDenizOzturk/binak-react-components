import { ReactNode, FC, LinkHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import classes from './BaseButton.module.css';

interface BaseLinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode;
  mode?: '' | 'flat' | 'outline' | 'form' | 'text';
  to: string;
}

export const BaseLink: FC<BaseLinkProps> = ({
  children,
  mode = '',
  to,
  ...props
}) => {
  const classNames = mode
    ? classes[mode] + ' ' + classes.button
    : classes.button;
  return (
    <Link className={classNames} to={to} {...props}>
      {children}
    </Link>
  );
};
