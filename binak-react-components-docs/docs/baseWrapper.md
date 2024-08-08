# BaseWrapper

## Import

```jsx
import { BaseWrapper } from 'binak-react-components';
```

## Props

|     Name     |                                                                                  Type                                                                                  | Default Value |
| :----------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------: |
| **children** |                                                                              _ReactNode_                                                                               |  _undefined_  |
|   **mode**   | _Array< \| 'gap-2rem' \| 'center' \| 'vertical-center' \| 'align-text-center' \| 'horizontal' \| 'vertical' \| 'max-40rem' \| 'grid-2' \| 'grid-3' \| 'align-right' >_ |     _[]_      |
| **...props** |                                                                              _div props_                                                                               |      _-_      |

## Example

```jsx
<BaseWrapper mode={['grid-3', 'center']} style={{ marginBottom: '2rem' }}>
  <BaseCard style={{ margin: 0 }}>Card-1</BaseCard>
  <BaseCard style={{ margin: 0 }}>Card-2</BaseCard>
  <BaseCard style={{ margin: 0 }}>Card-3</BaseCard>
  <BaseCard style={{ margin: 0 }}>Card-4</BaseCard>
  <BaseCard style={{ margin: 0 }}>Card-5</BaseCard>
</BaseWrapper>
```

![BaseWrapper](./img/baseWrapper.jpg)
