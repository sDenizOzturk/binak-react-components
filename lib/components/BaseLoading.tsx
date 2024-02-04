import { BaseSpinner } from './BaseSpinner';
import modalClasses from './BaseModal.module.css';
import { FC } from 'react';

export const BaseLoading: FC = () => {
  return (
    <div className={modalClasses.backdrop} style={{ zIndex: '1000' }}>
      <BaseSpinner />
    </div>
  );
};
