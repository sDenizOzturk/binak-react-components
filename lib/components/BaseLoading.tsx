import { BaseSpinner } from './BaseSpinner';
import modalClasses from './BaseModal.module.css';
import { FC } from 'react';
interface BaseLoadingProps {
  loading: boolean;
}
export const BaseLoading: FC<BaseLoadingProps> = ({ loading = true }) => {
  if (loading) {
    return (
      <div className={modalClasses.backdrop} style={{ zIndex: '1000' }}>
        <BaseSpinner />
      </div>
    );
  }
  return <></>;
};
