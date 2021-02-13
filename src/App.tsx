import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './containers/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

export default function App() {
    return (
        <Router>
            <>
                <Navigation />
                <Switch>
                    <Route path="/about">
                        <AboutPage />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </>
        </Router>
    );
}
