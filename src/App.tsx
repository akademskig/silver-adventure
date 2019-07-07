import React from 'react';
import "./styles/index.scss"
import Header from "./components/header"
import MainRoutes from './routes';

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Header></Header>
        <div className="app__content">
          <MainRoutes></MainRoutes>
        </div>
      </div>
    );
  }
}

export default App;
