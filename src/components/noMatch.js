import React from 'react';
import styled from 'styled-components';
import { Container} from 'react-bootstrap'

const Style=styled.div`

	display: grid;
	margin-top:16%;
    justify-content: center;
	color:red;
	font:2em 'Lobster';
 a{
 	text-align:center;
 	padding:2em;
 }

	@media screen and (max-width: 600px) {
	margin-top:50%;
  
}
	
`;

function NoMatch() {
	return(
		<Container>
		<Style>
		<h2>Error 404 -_-</h2>
		Page Not Found
		<a href='/'>Home</a>
		</Style>
		</Container>
		);
}

export default NoMatch;