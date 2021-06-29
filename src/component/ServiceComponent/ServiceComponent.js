import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import web from '../../asset/images/coding.svg'
import cyber from '../../asset/images/globe-grid.svg'
import solution from '../../asset/images/think.svg'
import support from '../../asset/images/support.svg'


class ServiceComponent extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <>
                <Container id="service" fluid={true} className="text-center px-0 generaLTopSpace">
                   <div className="serviceContainer px-0 mx-0">
                       <Container className="py-5">
                           <h4 className="sectionTitleGray mb-4">Service</h4>
                           <Row >
                               <Col data-aos='zoom-in' className="text-center" lg={3} md={3} sm={12}>
                                   <img className="serviceImg" src={web}/>
                                   <h5 className="pb-0 mb-0">Web Development</h5>
                                   <p className="pt-0 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>
                               </Col>
                               <Col data-aos='zoom-in' className="text-center" lg={3} md={3} sm={12}>
                                   <img className="serviceImg" src={cyber}/>
                                   <h5 className="pb-0 mb-0">Cyber Security</h5>
                                   <p className="pt-0 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>
                               </Col>
                               <Col data-aos='zoom-in' className="text-center" lg={3} md={3} sm={12}>
                                   <img className="serviceImg" src={solution}/>
                                   <h5 className="pb-0 mb-0">Business Solution</h5>
                                   <p className="pt-0 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>
                               </Col>
                               <Col data-aos='zoom-in' className="text-center" lg={3} md={3} sm={12}>
                                   <img className="serviceImg" src={support}/>
                                   <h5 className="pb-0 mb-0">Business Support</h5>
                                   <p className="pt-0 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>
                               </Col>
                           </Row>
                       </Container>
                   </div>
                </Container>
            </>
        );
    }
}

export default ServiceComponent;