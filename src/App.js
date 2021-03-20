import React from 'react';
import Button from 'terra-button';
import Base from 'terra-base';
import { injectIntl } from 'react-intl';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Router basename="/app1">
        <Switch>
          <Route exact path="/">
            <div>App 1 Home</div>
          </Route>
          <Route path="/page1">
            <div>App 1 - Page 1</div>
          </Route>
          <Route>
            <div>App 1 - Page Not Found</div>
          </Route>
        </Switch>
      </Router>
    </Base>
  );
}

export default App;
