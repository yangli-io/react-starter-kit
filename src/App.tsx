import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './containers/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Login from './pages/LoginPage';
import './styles/index.scss';
import styles from './App.module.scss';

export default function App(): JSX.Element {
  return (
    <Router>
      <Navigation />
      <div className={styles.container}>
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
