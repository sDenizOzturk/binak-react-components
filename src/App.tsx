import React from 'react';
import './App.css';

import { BaseButton, BaseCard, BaseInput, BaseWrapper } from '../dist/main';

function App() {
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
