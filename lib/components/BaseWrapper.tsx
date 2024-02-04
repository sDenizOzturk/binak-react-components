import { HTMLMotionProps } from 'framer-motion';
import classes from './BaseWrapper.module.css';
import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface BaseWrapperProps extends HTMLMotionProps<'div'> {
  children?: ReactNode;
  mode?: Array<
    | 'gap-2rem'
    | 'center'
    | 'vertical-center'
    | 'align-text-center'
    | 'horizontal'
    | 'vertical'
    | 'max-40rem'
    | 'grid-2'
    | 'grid-3'
    | 'align-right'
  >;
}

export const BaseWrapper: FC<BaseWrapperProps> = ({
  children,
  mode = [],
  ...props
}) => {
  const classNames =
    classes.default + ' ' + mode.map((_mode) => classes[_mode]).join(' ');
  return (
    <motion.div className={classNames} {...props}>
      {children}
    </motion.div>
  );
};
