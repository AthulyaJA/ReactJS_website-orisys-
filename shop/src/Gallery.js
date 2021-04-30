
import React, { Component } from 'react';
import {Navbar,Nav,Form,Button,Carousel,Row,Image,Col,Container} from 'react-bootstrap';
import Footer from './Footer';
class Gallery extends Component {

    constructor(props) {
                super(props);
                  }
render()
      {
    return (
        <React.Fragment>
    <h2> welcome to Gallery</h2>
    <Container>
        <Row>
    <Col xs={6} md={4}>
      <Image src="https://d3oj2y7irryo5z.cloudfront.net/wp-content/uploads/2019/10/photographer-698908_1280.jpg" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image src="https://www.diocesecpa.org/blog/wp-content/uploads/2019/07/Focus.jpg" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <h3>HeadPhone</h3>
      <Image src="https://rukminim1.flixcart.com/image/612/612/joonafk0/smart-headphone/z/u/g/hbs-730-neckband-bluetooth-headphones-wireless-sport-stereo-original-imafb36ue9mkchhm.jpeg?q=70" className=" size4 mt-3" thumbnail />
    </Col>
    <Col xs={6} md={4} className="mt-3">
    <h3>55 Inch LG</h3>
    <p className="text-success">$40000</p>
      <Image src="https://rukminim1.flixcart.com/image/312/312/kn97te80/television/p/r/s/55k71-55k71-iffalcon-original-imagfyzkdreg6swh.jpeg?q=70" thumbnail />
      <br></br><button className="btn bg-danger text-white mx-3 mt-3">ADD TO CART</button>
    <button className="btn bg-info text-white mt-3">Buy Now</button>
    </Col>
    <Col xs={6} md={4} className="mt-3">
      <h3>Double Door </h3>
      <p className="text-success">$20000</p>
      <Image  className="size3 " src="https://rukminim1.flixcart.com/image/312/312/kmz7qfk0/refrigerator-new/o/j/f/gl-d201abcy-4-2021-lg-original-imagfr9zegk94tby.jpeg?q=70" thumbnail />
      <br></br><button className="btn bg-danger text-white mx-3 mt-3">ADD TO CART</button>
    <button className="btn bg-info text-white mt-3">Buy Now</button>
    
    </Col>
    <Col xs={6} md={4} className="mt-3">
      <h3>FULLY AUTOMATIC AC</h3>
      <p className="text-success ">$35000</p>
      <Image src="https://rukminim1.flixcart.com/image/416/416/k6mibgw0/air-conditioner-new/q/2/g/ls-q18ynya-1-5-split-dual-inverter-lg-original-imafpfgwzfshgctw.jpeg?q=70" thumbnail className="size mt-5"/>
    <button className="btn bg-danger text-white mx-3 mt-3">ADD TO CART</button>
    <button className="btn bg-info text-white mt-3">Buy Now</button>
    </Col>
  </Row>

    </Container>
 
    </React.Fragment>
    );
}

}

    export default Gallery ;