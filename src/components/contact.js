import React from 'react';
import styled from 'styled-components';
import {GrLinkedin} from 'react-icons/gr';
import {MdMail} from 'react-icons/md';
import {AiFillGithub} from 'react-icons/ai';
import {FaTwitterSquare} from 'react-icons/fa';
import {SiHackerrank} from 'react-icons/si';
import {FaStackOverflow} from 'react-icons/fa';
import {Row} from 'react-bootstrap';


const Styles=styled.div`
  width: 85% ;
  margin:0% auto;
  
  p{
    font: 2.7rem 'Kanit';
    margin:1% 0;
    word-spacing:18%;
    text-indent: 50px;
    text-align:justify;
  }
 
  .social-icons {
    width:100%;
    list-style:none;
    margin: 3rem auto 1rem auto;
    display:flex;
    justify-content:center;
    border-radius: 16px;
    font-size: 2.8em;
}
.social-icons li a{
    padding:1% 5%;
    position: relative;
    text-align: center;
    line-height: 7px;
    width: 1rem;
    height: 1rem;
}

li{
  padding:1% 3%;
  transition: .2s linear;
}
.social-icons li:hover {
    transform: scale(1.3);
}
h3{
  text-align:left;
  font: 2.5rem '';
  margin-top:1%;
}
  @media screen and (max-width: 650px) {
    .para{font-size:1.7em;}
    .social-icons {
        font-size: 1.8em;   
    }
    p{
    font-size: 1.4rem;
    word-spacing:8%;
  }
  h3{
  font-size: 1.5rem;
}
`
const social=[
  {icon:<AiFillGithub/>,url:'https://github.com/bimarshak7'},
  {icon:<GrLinkedin/>,url:'https://www.linkedin.com/in/bimarsha-k-4636b6118'},
  {icon:<FaStackOverflow/>,url:'https://stackoverflow.com/users/13677542/bimarsha-khanal'},
  {icon:<FaTwitterSquare/>,url:'https://twitter.com/bimarshak7'},
  {icon:<SiHackerrank/>,url:'https://www.hackerrank.com/khanalbimarsha7'},
  {icon:<MdMail/>,url:'mailto:bimarsha.work@gmail.com'}
];
const Contact = ()=> {
	return(
    <Row className='content' id='contact'>
  		<Styles>
    		<div className='title'>Contact Me</div>
        <h3>Let's Be friends,</h3>
    		<p>I love connecting with people and building real communities with real human beings. So, if you have room for one more friend, here’s where you can find me… 
        </p>
        <div className="social-icons">
          {social.map(({ icon, url }) => (
          <li key={url}><a href={url} target='_blank' rel='noopener noreferrer'>{icon}</a></li>
          ))}
        </div>
  		</Styles>
    </Row>
		)
}

export default Contact;
