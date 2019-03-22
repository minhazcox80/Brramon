import React, { Component } from 'react';
import './Home.css'
import ctg from '../picture/ctg.jpg'
import dhaka from '../picture/dhaka.jpg'
import sylhet from '../picture/sylhet.jpg'
import cox from '../picture/cox.jpg'
import sanmartin from '../picture/sanmartin.jpg'
import rangamati from '../picture/rangamati.jpg'
import kuakata from '../picture/kuakata.jpg'
import bandarbar from '../picture/bandarban.jpg'
import sundarbon from '../picture/sundarbon.jpg'

import { Container, Card, Row, Col, CardDeck } from 'react-bootstrap';

class HhCard extends Component {
	render() {
		return (
			<div>
				<Container className='HhCard'>
					<h2>Recommend for you</h2>
					<Row > 
						<Col>
						<CardDeck>
						<Card className='bg-dark text-white'>
						<Card.Img src={ctg} alt='Card image' style={{height: '261px', width: '350px'}} />
						<Card.ImgOverlay>
							<Card.Title>CHATTAGRAM</Card.Title>
						</Card.ImgOverlay>
					</Card>
					<Card className='bg-dark text-white'>
						<Card.Img src={dhaka} alt='Card image' style={{height: '261px', width: '350px'}} />
						<Card.ImgOverlay>
							<Card.Title>DHAKA</Card.Title>
						</Card.ImgOverlay>
					</Card>
					<Card className='bg-dark text-white'>
						<Card.Img src={sylhet} alt='Card image' style={{height: '261px', width: '350px'}} />
						<Card.ImgOverlay>
							<Card.Title>SYLHET</Card.Title>
						</Card.ImgOverlay>
					</Card>
					</CardDeck>
						</Col>
					</Row>
					<br/>
					<Row>
						<Col>
						<CardDeck>
						<Card className='bg-dark text-white'>
						<Card.Img src={cox} alt='Card image' style={{height: '261px', width: '350px'}} />
						<Card.ImgOverlay>
							<Card.Title>COX'S BAZAR</Card.Title>
						</Card.ImgOverlay>
					</Card>
					<Card className='bg-dark text-white'>
						<Card.Img src={sanmartin} alt='Card image' style={{height: '261px', width: '350px'}} />
						<Card.ImgOverlay>
							<Card.Title>SANMARTIN</Card.Title>
						</Card.ImgOverlay>
					</Card>
					<Card className='bg-dark text-white'>
						<Card.Img src={rangamati} alt='Card image' style={{height: '261px', width: '350px'}} />
						<Card.ImgOverlay>
							<Card.Title>RANGAMATI</Card.Title>
						</Card.ImgOverlay>
					</Card>
					</CardDeck>
						</Col>
					</Row>
					<br/>
					<Row>
						<Col>
						<CardDeck>
						<Card className='bg-dark text-white'>
						<Card.Img src={kuakata} alt='Card image' style={{height: '261px', width: '350px'}} />
						<Card.ImgOverlay>
							<Card.Title>KUAKATA</Card.Title>
						</Card.ImgOverlay>
					</Card>
					<Card className='bg-dark text-white'>
						<Card.Img src={bandarbar} alt='Card image' style={{height: '261px', width: '350px'}} />
						<Card.ImgOverlay>
							<Card.Title>BANDARAN</Card.Title>
						</Card.ImgOverlay>
					</Card>
					<Card className='bg-dark text-white'>
						<Card.Img src={sundarbon} alt='Card image' style={{height: '261px', width: '350px'}} />
						<Card.ImgOverlay>
							<Card.Title>SUNDARBON</Card.Title>
						</Card.ImgOverlay>
					</Card>
					</CardDeck>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default HhCard;
