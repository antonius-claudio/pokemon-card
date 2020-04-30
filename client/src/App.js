import React from 'react';
import { Nav } from './components'
import './App.css';
import { Home, Detail, MyCard } from './pages';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default function App(props) {
  
  const routes = [
    {
      exact: true,
      path: '/',
      children: <Home/>
    },
    {
      path: '/detail/:id',
      children: <Detail/>
    },
    {
      path: '/mycard',
      children: <MyCard/>
    }
  ];
  

  return (
    <Provider store={store}>
      <Router>
        <Nav></Nav>
        <div className="container">
          <Switch>
            {routes.map(route => <Route {...route} />)}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}