import React from 'react';
import Button from 'terra-button';
import Base from 'terra-base';
import { injectIntl } from 'react-intl';
import logo from './logo.svg';
import './App.css';

// This value could be sent from the server as well
const locale = (navigator.languages && navigator.languages[0])
               || navigator.language
               || navigator.userLanguage
               || 'en';

const AppHeader = injectIntl(({ intl }) => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>  
      <Button 
        text={intl.formatMessage({id: 'App.Button'})}
        variant="de-emphasis"
      />
    </header>
  );
});

function App(props) {
  return (
    <Base locale={locale}>
      <AppHeader />
    </Base>
  );
}

export default App;
