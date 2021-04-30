
import React, { Component } from 'react';
import {BrowserRouter as Router ,Switch,Route,Link} from 'react-router-dom';
import {Navbar,Nav,NavDropdown,FormControl,Container,Button,Form,Image} from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi';
import {FiLogIn } from 'react-icons/fi';
import {FaHome} from 'react-icons/fa';
import {MdMore} from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import Home from './Home';
import Contact from './Contact';
import About from './Gallery';
import Footer from './Footer';
import Login from './Login';


class Header extends Component {

    constructor(props) {
        super(props);
          }
render()
      {
    return (
       
        <React.Fragment>


<Navbar bg="primary" expand="lg">

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
              {/* <Nav.Link href="/Home" className="text-white"><FaHome /></Nav.Link>
              <Nav.Link href="/Login" className="text-white"><FiLogIn/></Nav.Link>
              <Nav.Link href="#link" className="text-white"><MdMore/></Nav.Link> */}
              <Nav.Link href="/" className="text-white">Home</Nav.Link>
              <Nav.Link href="/Contact" className="text-white">Contact</Nav.Link>
              <Nav.Link href="/Gallery" className="text-white">Gallery</Nav.Link>
            

      {/* <NavDropdown title="More"  className="text-white" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
             <Nav.Link href="#home"><span className="px-2 text-white"><FiShoppingCart/> </span></Nav.Link>
             <Image src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" style={{ width: '10rem' }} />
   
    </Nav>
    <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-dark">Search</Button>
                                    </Form>

    
  </Navbar.Collapse>
</Navbar>
</React.Fragment>
   
);
}

}

export default Header ;