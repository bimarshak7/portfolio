import React, { Component } from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './components/home';
import NoMatch from './components/noMatch';
import Contact from './components/contact';
import About from './components/about';
import { Container} from 'react-bootstrap'
import Top from './components/nav';
import Game from './components/fun/game';
import './App.css';
import { CSSTransition } from 'react-transition-group'

const c_url=window.location.pathname;
const paths=['/','/about','/contact','/fun']
const url=paths.includes(c_url)?"404":c_url;
const routes = [
  { path: '/' , Component: Home },
  { path: '/about', Component: About },
  { path: '/contact', Component: Contact },
  { path: '/fun', Component: Game }
]

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Router>
      <Top/>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={500}
                  classNames="container"
                  unmountOnExit
                >
                  <Container classNames='container'>
                    <Component />
                  </Container>
                </CSSTransition>
              )}
            </Route>
          ))}
          <Route path={url} component={NoMatch}/>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;