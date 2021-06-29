import React, {Component} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {faFacebookSquare, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class ContactComponent extends Component {
    render() {
        return (
            <>
                <Container id="contact" className="text-center generaLTopSpace">
                    <h4 className="sectionTitle">Contact</h4>
                    <Row className="align-items-center mt-4">
                        <Col data-aos='fade-right' lg={5} md={5} sm={12} className="text-left">
                            <p className="mb-0 pb-0 text-muted">Email: gmail.com18@gmail.com</p>
                            <p className="mb-0 pb-0 text-muted">Phoe: (+880) 1789 096 018</p>
                            <p className="text-muted mb-0 pb-0">Address: House No 45/07 Road No. 4B Khulna 5407, Bangladesh</p>
                            <FontAwesomeIcon style={{"font-size":"20px", "cursor":"pointer"}} className="mt-2 mr-2 text-primary" icon={faFacebookSquare} />
                            <FontAwesomeIcon style={{"font-size":"20px", "cursor":"pointer"}} className="mt-2 mr-2 text-primary" icon={faTwitter} />
                            <FontAwesomeIcon style={{"font-size":"20px", "cursor":"pointer"}} className="mt-2 text-primary" icon={faLinkedinIn} />
                        </Col>
                        <Col data-aos='fade-left' lg={7} md={7} sm={12} className="pr-md-5">
                            <Form className="pr-md-5">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Enter Your Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="email" placeholder="Enter Your Email" />
                                </Form.Group>
                                <Form.Group className="mb-3"  controlId="exampleForm.ControlTextarea1">
                                    <Form.Control placeholder="Enter Your Message" as="textarea" rows={4} />
                                </Form.Group>
                                <div className="text-left">
                                    <Button className="px-4 btn-success btn-sm">Send</Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default ContactComponent;