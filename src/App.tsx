import React from 'react';
import './App.css';

import { BaseButton, BaseCard, BaseInput, BaseWrapper } from '../lib/main';

import { setColor1, setColor2, setColor3 } from '../lib/main';

function App() {
  setColor1(2, 255, 5);
  setColor2(255, 5, 5);
  setColor3(5, 5, 255);

  return (
    <>
      <BaseWrapper mode={['vertical-center']} style={{ height: '90vh' }}>
        <BaseCard>
          <BaseWrapper mode={['grid-2', 'center']}>
            <BaseButton>Default</BaseButton>
            <BaseButton mode="outline">Outline</BaseButton>
            <BaseButton noAnimation mode="flat">
              Flat
            </BaseButton>
            <BaseButton noAnimation mode="">
              Text
            </BaseButton>
          </BaseWrapper>
          <BaseWrapper mode={['vertical-center']} style={{ marginTop: '1rem' }}>
            <BaseInput />
          </BaseWrapper>
        </BaseCard>
      </BaseWrapper>
    </>
  );
}

export default App;
