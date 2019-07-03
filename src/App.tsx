import React from 'react';
import "./styles/index.scss"
import Header from "./components/header"
import NavigationRoutes from './routes';
import Navigation from './components/navigation';
import SearchBar from './components/searchBar';

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Header></Header>
        <div className="app__content">
          <Navigation></Navigation>
          <SearchBar></SearchBar>
          <NavigationRoutes></NavigationRoutes>
        </div>
      </div>
    );
  }
}

export default App;
