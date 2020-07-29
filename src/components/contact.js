import React from 'react';
import styled from 'styled-components';
import {GrLinkedin} from 'react-icons/gr';
import {MdMail} from 'react-icons/md';
import {AiFillGithub} from 'react-icons/ai';
import {FaTwitterSquare} from 'react-icons/fa';
import {AiFillRedditCircle} from 'react-icons/ai';
import {FaStackOverflow} from 'react-icons/fa';

const Styles=styled.div`
  width: 80% ;
  margin-left: auto ;
  margin-right: auto ;
	.para{
		background:rgba(170, 14, 14, 0.3);
		text-align:justify;
		font:1.2em 'Permanent Marker';
		margin-top:4%;
		mix-blend-mode: screen;
		padding:22px;
  		border-radius:36px 10px;
	}
	.title{
		font:2em 'Gochi Hand';
		text-align:center;
		text-decoration: underline wavy #00ff51;
	}
	.link-list{
		list-style:none;
		background:rgba(5, 215, 190, 0.5);
		display:flex;
		margin-top:10%;
  		justify-content:center;
		font-size:2em;
		border-radius:5px 28px;
	}
	.link-list li{
		padding:1% 5%;
		align-content:center;
	}
	.link-list a{color:white;}
	.link-list a:hover{color:red;}

	@media screen and (max-width: 700px) {
		width:100%;
		.para{font-size:1.2em;}
		.link-list{width:100%;font-size:2em;}
		
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
			<div className='link-list'>
				{social.map(({ icon, url }) => (
            <li><a href={url} target='_blank' rel='noopener noreferrer'>{icon}</a></li>
          ))}
			</div>
		</Styles>

		);
}

export default Contact;

