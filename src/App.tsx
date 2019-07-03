import React from 'react';
import "./styles/index.scss"
import Header from "./components/header"
import NavigationRoutes from './routes';
import Navigation from './components/navigation';

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Header></Header>
        <div className="app__content">
          <Navigation></Navigation>
          <NavigationRoutes></NavigationRoutes>
        </div>
      </div>
    );
  }
}

export default App;
