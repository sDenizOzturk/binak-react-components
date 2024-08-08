# BaseHeader

## Import

```jsx
import { BaseHeader } from 'binak-react-components';
```

Using with active style:

```jsx
import { BaseHeader, headerActiveStyle } from 'binak-react-components';
```

## Props

|       Name       |      Type      | Default Value |
| :--------------: | :------------: | :-----------: |
| **leftContent**  |  _ReactNode_   |  _undefined_  |
| **rightContent** |  _ReactNode_   |  _undefined_  |
|   **...props**   | _header props_ |      _-_      |

## Example

```jsx
const [language, setLanguage] = useState('en');
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
    ;
  </>
);
```

![BaseHeader](./img/baseHeader.gif)
