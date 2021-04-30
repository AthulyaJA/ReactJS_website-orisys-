
import React, { Component } from 'react';
import {BrowserRouter as Router ,Switch,Route,Link} from 'react-router-dom';
import {Navbar,Nav,Container,Form,NavDropdown,Image,Col} from 'react-bootstrap';

class Footer extends Component {

    constructor(props) {
        super(props);
          }
render()
      {
    return (
       
        <React.Fragment>
<section className="foot">
<Col xs={6} md={12} className="p-3">
<Navbar bg="dark" expand="lg">

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
              <Nav.Link href="#home" className="text-white px-5">ABOUT</Nav.Link>
              <Nav.Link href="/Login" className="text-white px-5">CONTACT</Nav.Link>
              <Nav.Link href="#home" className="text-white px-5">ABOUT</Nav.Link>
              <Nav.Link href="/Login" className="text-white px-5">CONTACT</Nav.Link>
              <Nav.Link href="#link" className="text-white px-5">SOICAL</Nav.Link>
              <Nav.Link href="#link" className="text-white px-5">WEBSITE</Nav.Link>
              <Nav.Link href="#link" className="text-white px-5">POLICY</Nav.Link>
              <Nav.Link href="#home" className="px-2 text-white px-5">HELP</Nav.Link>
              <br></br>

              

    </Nav>
    

    
  </Navbar.Collapse>
</Navbar>
<div className="footer-copyright cla py-3">
        
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.flipkart.com"> Flipkart.com </a>
       
      </div>
</Col>
</section>
      </React.Fragment>
      );
    }
    
    }
    
        export default Footer ;