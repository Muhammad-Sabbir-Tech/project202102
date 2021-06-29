import React, {Component} from 'react';
import {Button, Col, Container, Navbar, Row} from "react-bootstrap";

class HomeBanner extends Component {

    render() {
        return (
            <>
              <Container id="home"   fluid={true} className=" d-flex justify-content-center align-items-center pl-0 bannerBg">
                  <Row className="justify-content-center d-flex align-items-center">
                   <Col className="text-center">
                       <h4 className="homeTitle text-white font-weight-bolder overflow-hidden" >We Are The Web Developer</h4>
                       <p className="homeSub text-white font-weight-bolder">We Create The World's Best Website</p>
                       <Button className="btn btn-sm py-md-2 mr-2 px-md-4  font-weight-bold homeBtn">About Us</Button>
                       <Button className="btn btn-sm px-md-4 py-md-2  font-weight-bold homeBtn">Contact Us</Button>
                   </Col>
                  </Row>
              </Container>
            </>
        );
    }
}

export default HomeBanner;