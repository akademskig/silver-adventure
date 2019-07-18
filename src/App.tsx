import React from 'react';
import "./styles/index.scss"
import Header from "./components/header"
import MainRoutes from './routes';
import DeletePrompt from './components/modals/DeletePrompt';

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Header></Header>
        <div className="app__content">
          <MainRoutes></MainRoutes>
          <DeletePrompt></DeletePrompt>
        </div>
      </div>
    );
  }
}

export default App;
