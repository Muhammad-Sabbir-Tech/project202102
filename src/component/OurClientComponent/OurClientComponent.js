import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import logo1 from '../../asset/images/logo (1).svg'
import logo2 from '../../asset/images/logo (2).svg'
import logo3 from '../../asset/images/logo (3).svg'
import logo4 from '../../asset/images/logo (4).svg'
import logo5 from '../../asset/images/logo (5).svg'
import logo6 from '../../asset/images/logo (6).svg'

class OurClientComponent extends Component {
    render() {
        return (
            <>
                <div className="generaLTopSpace">
                    <div className="text-center py-4 serviceContainer">
                        <h4 className="sectionTitleGray mb-2">Our Client</h4>
                        <Container className="px-lg-5">
                            <Row  className="px-lg-5">
                               <Col data-aos='zoom-in' lg={2} md={2} sm={12}>
                                   <img  src={logo1} className="pt-2 clientLogo "/>
                               </Col>
                                <Col data-aos='zoom-in' lg={2} md={2} sm={12}>
                                    <img  src={logo2} className="pt-2 clientLogo "/>
                                </Col>
                                <Col data-aos='zoom-in' lg={2} md={2} sm={12}>
                                    <img src={logo3} className=" pt-2 clientLogo "/>
                                </Col>
                                <Col data-aos='zoom-in' lg={2} md={2} sm={12}>
                                    <img src={logo4} className="pt-2 clientLogo "/>
                                </Col>
                                <Col data-aos='zoom-in' lg={2} md={2} sm={12}>
                                    <img  src={logo5} className="pt-2 clientLogo "/>
                                </Col>
                                <Col data-aos='zoom-in' lg={2} md={2} sm={12}>
                                    <img  src={logo6} className="pt-2 clientLogo "/>
                                </Col>

                            </Row>
                        </Container>
                    </div>
                </div>
            </>
        );
    }
}

export default OurClientComponent;