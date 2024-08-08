/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import logoImage from './assets/logo.webp';

import {
  BaseButton,
  BaseCard,
  BaseInput,
  BaseWrapper,
  BaseErrorModal,
  BaseLoading,
  BaseModal,
  BaseSpinner,
  BaseHeader,
  headerActiveStyle,
  BaseFooter,
  footerActiveStyle,
  BaseFormInput,
  BaseFormItem,
} from '../lib/main';

import { useForm } from 'react-hook-form';

import {
  setColor1,
  setColor2,
  setColor3,
  setColor4,
  setColor5,
} from '../lib/main';

function App() {
  /*
  setColor1(255, 255, 125);
  setColor2(0, 125, 125);
  setColor3(125, 0, 0);
  setColor4(255, 0, 0);
  setColor5(255, 0, 255);
*/
  //return <BaseSpinner />;

  const [error, setError] = useState(''); //useState('This is error!');

  //const [openModal, setOpenModal] = useState(true);
  /*
  return (
    <BaseModal open={openModal} onClose={() => setOpenModal(false)}>
      <BaseCard style={{ margin: '0' }}>
        <BaseCard>
          <BaseCard>Inner Card</BaseCard>
          <BaseCard>Another Card</BaseCard>
        </BaseCard>
      </BaseCard>
    </BaseModal>
  );
  */
  /*
  return (
    <BaseModal
      open={openModal}
      onClose={() => setOpenModal(false)}
      baseDialog
      title="This is a dialog!"
      okayButton="okay"
    >
      <BaseCard style={{ margin: '0' }}>
        <BaseCard>
          <BaseCard>Inner Card</BaseCard>
          <BaseCard>Another Card</BaseCard>
        </BaseCard>
      </BaseCard>
    </BaseModal>
  );
*/

  const [language, setLanguage] = useState('en');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ fullname: string }>({ mode: 'onTouched' });

  return (
    <>
      <BaseHeader
        leftContent={
          <>
            <button>Header Button 1</button>
            <button style={headerActiveStyle}>Header Button 2</button>

            <img src={logoImage} alt="" style={{ marginLeft: '1rem' }} />
          </>
        }
        rightContent={
          <>
            <button
              onClick={() => setLanguage('tr')}
              style={language === 'tr' ? headerActiveStyle : {}}
            >
              Türkçe
            </button>
            <button
              onClick={() => setLanguage('de')}
              style={language === 'de' ? headerActiveStyle : {}}
            >
              Deutsch
            </button>
            <button
              onClick={() => setLanguage('en')}
              style={language === 'en' ? headerActiveStyle : {}}
            >
              English
            </button>
            <img src={logoImage} alt="" style={{ marginLeft: '1rem' }} />
          </>
        }
      />
      <BaseWrapper
        mode={['vertical']}
        style={{ minHeight: '90vh', justifyContent: 'center' }}
      >
        {/* BaseButton */}
        <BaseCard style={{ display: 'grid' }}>
          <BaseWrapper style={{ display: 'grid' }}>
            <BaseButton>default</BaseButton>
            <BaseButton mode="flat">flat</BaseButton>
            <BaseButton mode="outline">outline</BaseButton>
            <BaseButton mode="text">text</BaseButton>
          </BaseWrapper>
        </BaseCard>

        {/* BaseCard */}
        <BaseCard>
          <BaseCard>
            <BaseCard>Inner Card</BaseCard>
            <BaseCard>Another Card</BaseCard>
          </BaseCard>
        </BaseCard>

        {/* BaseFormInput */}
        <BaseCard>
          <form onSubmit={handleSubmit((data) => alert(data.fullname))}>
            <BaseFormInput
              id="fullname"
              label={'Fullname'}
              error={errors.fullname}
              register={register('fullname', {
                required: true,
                maxLength: 30,
                minLength: 5,
              })}
              errorMessage={'Please enter a valid fullname!'}
              childrenBefore={
                <img
                  src={logoImage}
                  alt=""
                  style={{ height: '2rem', width: 'auto', margin: 0 }}
                />
              }
              childrenAfter={
                <BaseButton mode="text" onClick={() => reset({ fullname: '' })}>
                  Clear
                </BaseButton>
              }
            />
            <BaseWrapper mode={['align-right']}>
              <BaseButton type="submit">Submit</BaseButton>
            </BaseWrapper>
          </form>
        </BaseCard>
        <br />

        {/* BaseFormItem */}
        <BaseCard>
          <form onSubmit={handleSubmit((data) => alert(data.fullname))}>
            <BaseFormItem
              id="fullname"
              label={'Fullname'}
              error={errors.fullname}
              errorMessage={'Please enter a valid fullname!'}
              childrenWrapperStyle={{
                display: 'flex',
                gap: '0.5rem',
                alignItems: 'center',
              }}
            >
              <img
                src={logoImage}
                alt=""
                style={{ height: '2rem', width: 'auto', margin: 0 }}
              />
              <BaseInput
                register={register('fullname', {
                  required: true,
                  maxLength: 30,
                  minLength: 5,
                })}
              />
              <BaseButton mode="text" onClick={() => reset({ fullname: '' })}>
                Clear
              </BaseButton>
            </BaseFormItem>

            <BaseWrapper mode={['align-right']}>
              <BaseButton type="submit">Submit</BaseButton>
            </BaseWrapper>
          </form>
        </BaseCard>
        <br />

        {/* BaseInput */}
        <BaseCard>
          <BaseInput id="name" style={{ textAlign: 'center', color: 'red' }} />
        </BaseCard>
      </BaseWrapper>
      {/* BaseErrorModal */}
      <BaseErrorModal
        error={error}
        onClose={() => setError('')}
        okayButton="okay"
      />
      {/* BaseLoading */}
      <BaseLoading loading={false} />

      {/* BaseWrapper */}
      <BaseWrapper mode={['grid-3', 'center']} style={{ marginBottom: '2rem' }}>
        <BaseCard style={{ margin: 0 }}>Card-1</BaseCard>
        <BaseCard style={{ margin: 0 }}>Card-2</BaseCard>
        <BaseCard style={{ margin: 0 }}>Card-3</BaseCard>
        <BaseCard style={{ margin: 0 }}>Card-4</BaseCard>
        <BaseCard style={{ margin: 0 }}>Card-5</BaseCard>
      </BaseWrapper>

      <BaseFooter
        leftContent={
          <>
            <button style={footerActiveStyle}>Footer Button 1</button>
            <button>Footer Button 2</button>
            <img src={logoImage} alt="" style={{ marginLeft: '1rem' }} />
          </>
        }
        rightContent={
          <>
            <button
              onClick={() => setLanguage('tr')}
              style={language === 'tr' ? footerActiveStyle : {}}
            >
              Türkçe
            </button>
            <button
              onClick={() => setLanguage('de')}
              style={language === 'de' ? footerActiveStyle : {}}
            >
              Deutsch
            </button>
            <button
              onClick={() => setLanguage('en')}
              style={language === 'en' ? footerActiveStyle : {}}
            >
              English
            </button>
            <img src={logoImage} alt="" style={{ marginLeft: '1rem' }} />
          </>
        }
      />
    </>
  );
}

export default App;
