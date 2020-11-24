import React from 'react';
import styled from 'styled-components';
import {FaHome} from 'react-icons/fa';
import {MdSchool} from 'react-icons/md';
import {HiLightBulb} from 'react-icons/hi';

import { CardDeck, Card } from 'react-bootstrap';
const Styles=styled.div`
  width: 85% ;
  margin:auto;
 
  .title{
    font:3em 'Permanent Marker';
    text-align:center;
    text-decoration: underline double indigo;
	}
	.card-deck .card {
    margin:25px;
    transition: transform 0.45s ease-out;
}
   .card-header{
   	font-size:1.7em;
    font-weight: bold;
   }

.card:hover{
  transform: scale(1.1);
  box-shadow: rgba(185, 56, 56, 0.45) 0px 22px 50px 4px;
}
.card-text{
  font-size: 1.2em;
  font-weight: bold;
}
svg{
  float:right;
  transform:scale(1.7);
  color: #000;
}
@media screen and (max-width: 1050px) {
  .card-deck{
    flex-flow:column;
  }
}
`

function Test() {
	return(
		<Styles>
		<div className='title'>About Me</div>
		<CardDeck>
  <Card className="mb-2" bg='success' text='light'>
    <Card.Header>Address<FaHome/></Card.Header>
    <Card.Body>
      <Card.Text>
        Pokhara, Kaski <br/>
        Gandaki Province<br/>
        Nepal
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="mb-2" bg='info' text='light'>
    <Card.Header>Education<MdSchool/></Card.Header>
    <Card.Body>
      
      <Card.Text>
        - High School : SOS Hermann Gmeiner School, Gandaki<br/>
        - Currently pursuing Undergraduate Degree in Computer Engineering at TU,IOE, Paschimanchal Campus.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card className="mb-1" bg='danger' text='light'>
    <Card.Header>Skills<HiLightBulb/></Card.Header>
    <Card.Body>
      
      <Card.Text>
        - Machine Learning(Python)<br/>
        - Django, RestFramework<br/>
        - ReactJs<br/>
        - HTML, CSS, JS
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
		</Styles>
		)
}

export default Test;

