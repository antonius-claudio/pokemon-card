import React from 'react';
import { Nav } from './components'
import './App.css';
import { Home, Detail, MyCard } from './pages';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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

export const AppRouter = () => (
    <Switch>
      {routes.map((route) => <Route key={route} {...route} />)}
    </Switch>
);

export default function App(props) {
  return (
    <Router>
      <Provider store={store}>
        <Nav></Nav>
        <div className="container">
          <AppRouter />
        </div>
      </Provider>
    </Router>
  );
}