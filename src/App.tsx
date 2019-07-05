import React from 'react';
import "./styles/index.scss"
import Header from "./components/header"
import NavigationRoutes, { ContactSubroutes } from './routes';

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Header></Header>
        <div className="app__content">
          <NavigationRoutes></NavigationRoutes>
          <ContactSubroutes></ContactSubroutes>
        </div>
      </div>
    );
  }
}

export default App;
