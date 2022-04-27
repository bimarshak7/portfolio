import React from 'react';
import styled from 'styled-components';
import { CardGroup, Card, Row, Button } from 'react-bootstrap';

const Styles=styled.div`
  width: 85% ;
  margin:0% auto;
  padding:1em 0.5em;
  p{
    font-size: 1.2rem;
    margin:1% 0;
  }
  
  .card{
    margin:5% 2%;
    max-width:25rem;
  }
  .card-title{
    font: 1.7rem 'Gochi Hand';  
  }
  .card-header{
    background:black;
  }
@media screen and (max-width: 1000px) {
  p{
    font-size: 1.5rem;
  }
  .card-deck{
    flex-flow:column;
  }
  h2{
    font-size:1.5rem;
  }
}
`

function ShowCase() {
	return(
    <Row className='content' id='showcase'>
  		<Styles>
    		<div className='title'>Showcase</div>
    		<p>Here are some of the projects I am working on or have completed recently...</p>
        <Row className='card-deck'>
          <Card className="mb-2">
            <Card.Header>ML</Card.Header>
            <Card.Body>
              <Card.Title>Nepali Handwritting Digit Classification</Card.Title>
              <Card.Text>
                Nepali Handwritten Digits are classified using Artificial Neural Network.
              </Card.Text>
            </Card.Body>
              <Button variant="dark">
              <Card.Link target='new' href="https://github.com/bimarshak7/Nepali-Handwritten-Digit-Classification">Check Now</Card.Link>
              </Button>
          </Card>
          <Card className="mb-2">
            <Card.Header>FullStack</Card.Header>
            <Card.Body>
              <Card.Title>Instapound</Card.Title>
              <Card.Text>
                Instagram like app using Flask and ReactJS.
              </Card.Text>
            </Card.Body>
              <Button variant="dark">
              <Card.Link target='new' href="https://github.com/bimarshak7/instapound">Check now</Card.Link>
              </Button>
          </Card>
          <Card className="mb-2">
            <Card.Header>FrontEnd</Card.Header>
            <Card.Body>  
              <Card.Title>Bulk Ipo Result Checker</Card.Title>            
              <Card.Text>
                Check IPO Result of Multiple BOIDs at once.
              </Card.Text>
            </Card.Body>
              <Button variant="dark"><Card.Link target='new' href="https://github.com/bimarshak7/Bulk-IPO-Result">Check now</Card.Link></Button>
          </Card>
        </Row>
  		</Styles>
    </Row>
		)
}

export default ShowCase;
