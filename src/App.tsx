import React from 'react';
import "./styles/index.scss"
import Header from "./components/header"
import { NavigationRoutes } from './routes';
import Navigation from './components/navigation';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header></Header>
      <Navigation></Navigation>
      <NavigationRoutes></NavigationRoutes>
    </div>
  );
}

export default App;
