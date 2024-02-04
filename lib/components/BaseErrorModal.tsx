import { BaseModal } from './BaseModal';
import { FC } from 'react';

interface BaseErrorModalProps {
  error: string;
  errors?: string[];
  okayButton?: string;
  title?: string;
  onClose: () => unknown;
}

export const BaseErrorModal: FC<BaseErrorModalProps> = ({
  error,
  errors,
  okayButton = '',
  title = 'An Error Occurred',
  onClose,
}) => {
  return (
    <BaseModal
      open={!!error}
      onClose={onClose}
      center
      title={title}
      content={error}
      baseDialog
      okayButton={okayButton}
      backdropStyle={{ zIndex: 1000 }}
      dialogStyle={{ zIndex: 1001, padding: '0' }}
    >
      <ul>{errors && errors.map((err) => <li key={err}>err</li>)}</ul>
    </BaseModal>
  );
};
