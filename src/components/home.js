import React from 'react';
import styled from 'styled-components';
import {Container} from 'react-bootstrap';

const Styles = styled.div`
    display: grid;
    justify-content: center;
    margin:35vh 0 10%;
    height:100%;

.hey{
	font-size:4vw;
	line-height:1em;
	background-color: #10fdd7;
  	color: black; 
  	font-weight: bold;
  	width: 70%;
  	text-align: center;
  	position: relative;
  	padding: 5px 5px;
  	left: 45%;
  	transform: translate(-50%, -50%);
  	mix-blend-mode: screen;
}
.name{
	font-size:7vw;
	position:relative;
	text-align:center;
	display:inline-block;
	padding:5px 7px;
}
.btm{
	 font:2.5vw '';
	 font-weight:bold;
	 background-color:#b90909a6;
	 padding:0 3em;
	 text-align:center;
}
.how{
	font:2em 'Gochi Hand';
	text-align:center;
}
.am{
	font:3vw 'Gochi Hand';
	color:cyan;
	text-align:left;
}
@media screen and (max-width: 900px) {
	margin-top:25vh;
  .btm {
    font-size:5.7vw;
    margin-top:7%;
    width:auto;
    white-space:nowrap;
    padding:0.1em 0em;
  }
  .name{font-size:9vw;}
  .hey{margin-bottom:5%;left:50%;font-size:7vw;}
  .how{font-size:1.5em;}
  .am{font-size:5vw} 
}
`;

function Home() {
	return(
		<Container>
		<Styles id='home'>
		<div className='hey'>Namaste!</div>
		<span className='how'>How's it going?</span>
		<span className='am'>I am</span>
		<span className='name'>Bimarsha Khanal.</span>
		<div className='btm'>
		----- Learning Mode: On 😉 -----
		</div>
		
		</Styles>
		</Container>
		);
}

export default Home;