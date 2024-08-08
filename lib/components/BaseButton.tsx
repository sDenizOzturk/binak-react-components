import { ReactNode, FC } from 'react';
import classes from './BaseButton.module.css';
import { HTMLMotionProps, motion } from 'framer-motion';
import { bounce } from '../utils/animationVariants';

interface BaseButtonProps extends HTMLMotionProps<'button'> {
  children?: ReactNode;
  mode?: 'default' | 'flat' | 'outline' | 'text' | 'rectangle';
  noAnimation?: boolean;
}

export const BaseButton: FC<BaseButtonProps> = ({
  children,
  mode = 'default',
  noAnimation = false,
  ...props
}) => {
  const classNames = mode
    ? classes[mode] + ' ' + classes.button
    : classes.button;

  const _whileHover = !noAnimation ? bounce.m.scale : undefined;
  const _transition = !noAnimation ? bounce.m.transition : undefined;

  return (
    <motion.button
      whileHover={_whileHover}
      transition={_transition}
      className={classNames}
      {...props}
    >
      {children}
    </motion.button>
  );
};
