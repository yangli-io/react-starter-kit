import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './state/store';
import { Provider, useSelector } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { IntlProvider } from 'react-intl'
import removeLoading from './utils/remove-loading'
import useLocale from './hooks/useLocale'
import { RootState } from './state/store'

function WrapperWithLocale() {
  const [messages, setMessages] = useState({});

  const locale = useLocale();

  useEffect(() => {
    const fetchLanguage = async () => {
      const language = await import(`./translations/${locale}.json`);

      setMessages(language);

      removeLoading();
    }
    
    fetchLanguage()
  }, [locale]);

  if (!Object.keys(messages).length) return null;
  
  return (
    <IntlProvider messages={messages} locale={locale}>
      <App />
    </IntlProvider>
  )
}

// Separated Wrapper because need to get redux state in WrapperWithLocale
// Can't get redux state in same function as redux Provider
function Wrapper() {
  return (
    <Provider store={store}>
      <WrapperWithLocale />
    </Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Wrapper />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
