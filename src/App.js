import React from 'react';
import {
  useLocation,
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home';
import NoMatch from './components/noMatch';
import Contact from './components/contact';
import About from './components/about';


import { Container} from 'react-bootstrap'
import Top from './components/nav';
import Game from './components/fun/game';
import './App.css';
import { CSSTransition ,TransitionGroup } from 'react-transition-group'

const c_url=window.location.pathname;
const paths=['/','/about','/contact','/fun']
const url=paths.includes(c_url)?"/404":c_url;
const routes = [
  { path: '/' , Component: Home },
  { path: '/about', Component: About },
  { path: '/contact', Component: Contact },
  { path: '/fun', Component: Game }
]

function AnimationApp() {
  const location = useLocation();
  return (
    <div>
        <Top/>
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={500} classNames="container" unmountOnExit>
            <Switch location={location}>
              <Router>
        <Container classNames='container'>
          {routes.map(({path, Component})=>(
            <Route key={path} path={path} exact component={Component}/>
            ))}
          <Route path={url} component={NoMatch}/>
                
      </Container>
              </Router>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
    </div>
  );
}function App() {
  return (
    <Router>
      <Switch>
        <Route path="*">
          <AnimationApp />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;