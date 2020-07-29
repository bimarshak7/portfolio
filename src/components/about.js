import React from 'react';
import styled from 'styled-components';
import {FaHome} from 'react-icons/fa';
import {MdSchool} from 'react-icons/md';
import {FaUniversity} from 'react-icons/fa';
const Styles=styled.div`
  width: 80% ;
  margin-left: auto ;
  margin-right: auto ;
  .title{
		font:1.5em 'Permanent Marker';
		text-align:center;
		text-decoration: underline wavy #00ff51;
	}
   
   .lst{
	   	list-style:none;
	   	font:2em 'Cursive';
	   	background:rgba(7, 17, 64, 0.5);
	   	padding:1vh 3vw;
	   	margin-top:4%;
	   	border-radius:1em 2em;
   }
   .lst li{
	   	text-align:justify;
	   	padding-top:0.8em;
   }

   @media screen and (max-width: 700px) {
		width:100%;
		.lst{font:1.5em 'Times New Roman'}
}
`

function About(argument) {
	return(
		<Styles>
		<div className='title'>About Me</div>
		<div className='lst'>
		<li><span role="img" aria-label="sheep">🇳🇵</span>Nepal</li>
		<li><FaHome/> Gandaki Province, Kaski, Pokhara</li>
		<li><MdSchool/> High School: SOS Hermann Gmeiner School Gandaki (Applied Science)</li>
		<li><FaUniversity/> Computer Engineering at Tribhuwan Universsity, IOE, Paschimanchal Campus</li> 
		</div>
		</Styles>
		)
}

export default About;