import classes from './BaseFormItem.module.css';
import { FC, ReactNode } from 'react';
import { FieldError } from 'react-hook-form';

interface BaseFormItemProps {
  label: string;
  error: FieldError | undefined;
  id: string;
  errorMessage?: string;
  children: ReactNode;
}

export const BaseFormItem: FC<BaseFormItemProps> = ({
  label,
  error,
  id,
  children,
  errorMessage = 'Please enter a valid value',
}) => {
  return (
    <div className={classes['form-control']}>
      <label htmlFor={id}>{label}</label>
      {children}
      {error && (
        <label htmlFor={id} className={classes['label-error']}>
          {errorMessage}
        </label>
      )}
    </div>
  );
};
