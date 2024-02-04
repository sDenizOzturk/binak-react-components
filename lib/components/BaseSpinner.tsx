import { FC } from 'react';
import classes from './BaseSpinner.module.css';

export const BaseSpinner: FC = ({ ...props }) => {
  return (
    <div className={classes.spinner} {...props}>
      <div className={classes['lds-roller']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
