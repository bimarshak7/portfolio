import React from 'react';
import './app.css';
import Home from './components/home.js';
import Top from './components/nav.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import ShowCase from './components/showcase.js';
import {Container} from 'react-bootstrap';

const App = () => {
	return (
		<Container fluid>
			<Top/>
			<Home/>
			<About/>
			<Contact/>
			<ShowCase/>
		</Container>
	)
}

export default App;