import React, { Component } from 'react';
import './Home.css'
import { Container, Row, Col} from 'react-bootstrap';


class Footer extends Component {
  render() {
    return (
      <div className="footer">

      <Container >
        <Row>
          <Col>
            <ul>
              <li><h4>Brramon</h4></li>
              <li><a href="http://">About</a></li> 
              <li><a href="http://">Careers</a></li>
              <li><a href="http://">Jobs</a></li>
              <li><a href="http://">Press</a></li>
              <li><a href="http://">Policies</a></li>
              <li><a href="http://">Help</a></li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li><h4>Hosting</h4></li>
              <li><a href="http://">Why Host</a></li> 
              <li><a href="http://">Responsible Hosting</a></li>
              <li><a href="http://">Community Center</a></li>
              <li><a href="http://">Trust & Safety</a></li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li><h4>Company</h4></li>
              <li><a href="http://">Terms</a></li> 
              <li><a href="http://">Privacy</a></li>
              <li><a href="http://">Site Map</a></li>
            </ul>
          </Col>
        </Row>
        <Row >
          <Col>
            <ul className="icon">
              <li>
                <a href="https://www.facebook.com/minhaz " target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook">  Facebook</i></a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube-square">  Youtube</i></a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer"><i className="fab fa-google-plus-square">  Google</i></a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <h6 className="copyright">Copyright 2019| All right reserved </h6>
      </div>
    );
  }
}

export default Footer;
