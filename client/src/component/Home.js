import React, { Component } from 'react';
import './Home.css';
import logo from '../picture/logo1.png';
import background from '../picture/home.jpg';
//React-Bootstrap import 
import { Container, NavbarBrand, Navbar, Col, Form, Button, ButtonGroup } from 'react-bootstrap';
//React-Router import
// import {NavLink }from 'react-router-dom'

class Home extends Component {
	render() {
		return (
			<div className='Home'>
				<Navbar bg='light' className='navbar'>
					<Container>
						<NavbarBrand>
							<img src={logo} className='logo' alt='logo' /> Brramon.com
						</NavbarBrand>
						<ButtonGroup className='nav'>
						  <Button variant='outline-warning'>Home</Button> 
							<Button variant='outline-warning'>About</Button>
							<Button variant='outline-warning'>Rent Hotel & Home</Button>
							<Button variant='outline-warning'>Service</Button>
							<Button variant='outline-warning'>Log Out</Button>
						  <Button variant='warning'>Log In</Button> 
						</ButtonGroup>
					</Container>
				</Navbar>

				<Container>
					<div className='searchForm'>
						<Form>
            <h4>Find your next Hotels or Homes</h4>
							<Form.Group controlId='places'>
								<Form.Row>
									<Col>
										<Form.Label>WHERE</Form.Label>
										<Form.Control type='text' placeholder="e.g Dhaka, Bangladesh" />
									</Col>
								</Form.Row>
								<Form.Group />
              
              <Form.Group controlId='i/o'> 
								<Form.Row>
									<Col>
										<Form.Label>CHECK IN</Form.Label>
										<Form.Control type='text' placeholder='mm/dd/yyyy' />
									</Col>
									<Col>
										<Form.Label>CHECK OUT</Form.Label>
										<Form.Control type='text' placeholder='mm/dd/yyyy' />
									</Col>
								</Form.Row>
                </Form.Group>

               <Form.Group controlId="guest"> 
								<Form.Row>
									<Form.Label>GUEST</Form.Label>
									<Form.Control as='select'>
                    <option></option>
										<option>Adults</option>
										<option>Children</option>
									</Form.Control>
								</Form.Row>
								</Form.Group>

              
								<Form.Row>
									<Col>
										<Button variant='primary' block>
											Search
										</Button>
									</Col>
								</Form.Row>
							</Form.Group>
						</Form>
					</div>
				</Container>
				<img src={background} className='background' alt='Background' />
				
			</div>
		);
	}
}

export default Home;
