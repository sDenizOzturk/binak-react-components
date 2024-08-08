import classes from './BaseFormItem.module.css';
import { CSSProperties, FC, ReactNode } from 'react';
import { FieldError } from 'react-hook-form';

interface BaseFormItemProps {
  label?: string;
  error: FieldError | undefined;
  id: string;
  errorMessage?: string;
  children: ReactNode;
  childrenWrapperStyle?: CSSProperties;
  labelPosition?: 'left' | 'center' | 'right';
}

export const BaseFormItem: FC<BaseFormItemProps> = ({
  label,
  error,
  id,
  children,
  errorMessage = 'Please enter a valid value',
  childrenWrapperStyle,
  labelPosition = 'left',
  ...props
}) => {
  return (
    <div className={classes['form-control']} {...props}>
      <label htmlFor={id} style={{ textAlign: labelPosition }}>
        {label}
      </label>
      <div style={childrenWrapperStyle}>{children}</div>
      {error && (
        <label htmlFor={id} className={classes['label-error']}>
          {errorMessage}
        </label>
      )}
    </div>
  );
};
