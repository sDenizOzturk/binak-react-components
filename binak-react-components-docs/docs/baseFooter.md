# BaseFooter

## Import

```jsx
import { BaseFooter } from 'binak-react-components';
```

Using with active style:

```jsx
import { BaseFooter, headerActiveStyle } from 'binak-react-components';
```

## Props

|       Name       |      Type      | Default Value |
| :--------------: | :------------: | :-----------: |
| **leftContent**  |  _ReactNode_   |  _undefined_  |
| **rightContent** |  _ReactNode_   |  _undefined_  |
|   **...props**   | _footer props_ |      _-_      |

## Example

```jsx
const [language, setLanguage] = useState('en');
return (
  <>
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
    ;
  </>
);
```

![BaseFooter](./img/baseFooter.gif)
