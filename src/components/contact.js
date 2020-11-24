import React from 'react';
import styled from 'styled-components';
import {GrLinkedin} from 'react-icons/gr';
import {MdMail} from 'react-icons/md';
import {AiFillGithub} from 'react-icons/ai';
import {FaTwitterSquare} from 'react-icons/fa';
import {AiFillRedditCircle} from 'react-icons/ai';
import {FaStackOverflow} from 'react-icons/fa';

const Styles=styled.div`
  width:85%;
  margin:4% auto ;
  padding:5%;
  margin-right: auto ;
  background:rgba(14, 112, 170, 0.3);
  border-radius:36px 10px;
	.para{
		text-align:justify;
		font:2.5em 'Gochi Hand';
		margin-top:4%;
		mix-blend-mode: screen;
		padding:16px;
	}
	.title{
		font:3em 'Permanent Marker';
		text-align:center;
		text-decoration: underline double cyan;
	}
	

.social-icons {
		width:100%;
    	list-style:none;
		background:rgba(0, 0, 0, 0.5);
		display:flex;
  		justify-content:center;
		border-radius: 16px;
    	font-size: 2.8em;
}

.social-icons li a {
    padding:1% 5%;
    color: #fff;
    position: relative;
    text-align: center;
    line-height: 70px;
    width: 100px;
    height: 100px
}

.social-icons li a::before,
.social-icons li a::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    left: 0;
    top: 0;
    transition: .2s linear;
}

.social-icons li:hover {
    transform: scale(1.3);
    color: green;
}

.social-icons li a:hover::before {
    transform: skewX(20deg);
    border-left: 3px solid;
    border-right: 3px solid
}

.social-icons li a:hover::after {
    transform: skewY(-25deg);
    border-top: 3px solid;
    border-bottom: 3px solid
}

li{
	padding:1% 5%;
}

	@media screen and (max-width: 700px) {
		width:100%;
		padding:3%;
		margin-left: -3% ;
		.para{font-size:1.7em;}
		.social-icons {
		    font-size: 1.8em;
		    
		}
}
	
`
const social=[
	{icon:<AiFillGithub/>,url:'https://github.com/bimarshak7'},
	{icon:<GrLinkedin/>,url:'https://www.linkedin.com/in/bimarsha-k-4636b6118'},
	{icon:<FaStackOverflow/>,url:'https://stackoverflow.com/users/13677542/bimarsha-khanal'},
	{icon:<FaTwitterSquare/>,url:'https://twitter.com/bimarshak7'},
	{icon:<AiFillRedditCircle/>,url:'https://www.reddit.com/user/bimarshak7'},
	{icon:<MdMail/>,url:'mailto:khanalbimarsha@gmail.com'}
]
function Contact() {
	return(
		<Styles>
		<div className='title'>Let’s Be Friends!</div>
		<p className='para'>
			I love connecting with people and building real communities with real human beings. So, if you have room for one more friend, here’s where you can find me…			
		</p>

		<ul class="social-icons">
		{social.map(({ icon, url }) => (
            <li><a href={url} target='_blank' rel='noopener noreferrer'>{icon}</a></li>
          ))}
        </ul>
        
		</Styles>

		);
}

export default Contact;

