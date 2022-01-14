import React from 'react';
import styled from 'styled-components';
import {FaHome} from 'react-icons/fa';
import {MdSchool} from 'react-icons/md';
import {HiLightBulb} from 'react-icons/hi';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

const Styles=styled.div`
  width: 85% ;
  margin:0% auto;
  padding:1em 0.5em;
  p{
    font: 1.7em 'Gochi Hand';
    margin:1% 0;
    word-spacing:28%;
  }
  
  .line{
    border-right: 3px solid aqua;
    margin:3vh 3vw 1vh 0;
  }
  h2{
    text-decoration:underline cyan;
  }
@media screen and (max-width: 700px) {
  padding:0.5rem 0.5vw;
  .line{
    display:none;
  }
  p{
    font-size: 1.2rem;
    word-spacing:8%;
  }
  h2{
    font-size:1.5rem;
  }
}
`

function About() {
	return(
    <Row className='content' id='about'>
  		<Styles>
    		<div className='title'>About Me</div>
    		<p>I am a Computer Engineering Student. I love solving real world problems through my codes. I always strive to bring 100% to the work I do. I do have a great interest in Machine Learning and full stack development. 
        </p>
        <Row>
          <Col md>
              <h2><MdSchool/>  Education</h2>
              <p>
              <li>High School: SOS Hermann Gmeiner School, Gandaki</li>
              <li>Currently pursuing undergraduate degree in Computer Engineering at IOE, Paschmanchal Campus, Pokhara</li>
              <li>Expected Graduation: 2023AD</li>
              </p>
          </Col>
          <div className='line'></div>
          <Col md>
              <h2><HiLightBulb/>  Skills</h2>
              <p>
                <li>Flask (RestAPI)</li>
                <li>React JS + Redux</li>
                <li>Machine Learning (Python)</li>
                <li>Git</li>
                <li>Linux </li> 
                <li>Programming Languages: C, C++, Python, JS</li>
              </p>
          </Col>
        </Row>
  		</Styles>
    </Row>
		)
}

export default About;
