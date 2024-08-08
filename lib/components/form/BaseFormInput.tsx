import { BaseFormItem } from './BaseFormItem';
import { BaseInput } from '../BaseInput';
import { CSSProperties, FC, InputHTMLAttributes, ReactNode } from 'react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';

interface BaseFormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  register: UseFormRegisterReturn<any>;
  error?: FieldError;
  errorMessage?: string;
  inputType?: string;
  childrenAfter?: ReactNode;
  childrenBefore?: ReactNode;
  childrenWrapperStyle?: CSSProperties;
  labelPosition?: 'left' | 'center' | 'right';
}

export const BaseFormInput: FC<BaseFormInputProps> = ({
  error,
  label,
  id,
  errorMessage,
  register,
  inputType,
  childrenAfter,
  childrenBefore,
  childrenWrapperStyle = {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
  },
  labelPosition = 'left',
  ...props
}) => {
  return (
    <>
      <BaseFormItem
        id={id}
        label={label}
        error={error}
        errorMessage={errorMessage}
        childrenWrapperStyle={childrenWrapperStyle}
        labelPosition={labelPosition}
        {...props}
      >
        {childrenBefore}
        <BaseInput register={register} type={inputType} />
        {childrenAfter}
      </BaseFormItem>
    </>
  );
};
