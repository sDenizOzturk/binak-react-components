# BaseLoading

## Import

```jsx
import { BaseLoading } from 'binak-react-components';
```

## Props

|    Name     |   Type    | Default Value |
| :---------: | :-------: | :-----------: |
| **loading** | _boolean_ |    _true_     |

## Example

```jsx
<>
  {/* BaseLoading */}
  <BaseLoading loading={true} />
  <BaseWrapper
    mode={['vertical']}
    style={{ minHeight: '100vh', justifyContent: 'center' }}
  >
    {/* BaseCard */}
    <BaseCard>
      <BaseCard>
        <BaseCard>Inner Card</BaseCard>
        <BaseCard>Another Card</BaseCard>
      </BaseCard>
    </BaseCard>
  </BaseWrapper>
</>
```

![BaseLoading](./img/baseLoading.gif)
