# BaseButton

## Import

```jsx
import { BaseButton } from 'binak-react-components';
```

## Props

|      Name       |                     Type                     | Default Value |
| :-------------: | :------------------------------------------: | :-----------: |
|    **mode**     | _'default' \| 'flat' \| 'outline' \| 'text'_ |  _'default'_  |
|  **children**   |                 _ReactNode_                  |  _undefined_  |
| **noAnimation** |                  _boolean_                   |    _false_    |
|  **...props**   |                _button props_                |      _-_      |

## Example

```jsx
<BaseCard>
  <BaseWrapper style={{ display: 'grid' }}>
    <BaseButton>default</BaseButton>
    <BaseButton mode="flat">flat</BaseButton>
    <BaseButton mode="outline">outline</BaseButton>
    <BaseButton mode="text">text</BaseButton>
  </BaseWrapper>
</BaseCard>
```

![BaseButton](./img/baseButton.gif)
