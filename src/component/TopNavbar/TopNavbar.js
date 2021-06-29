import React, {Component} from 'react';
import '../../asset/css/bootstrap.min.css'
import '../../asset/css/custom.css'
import '../../asset/css/responsive.css'
import {Container, Nav, Navbar} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";


class TopNavbar extends Component {
    constructor() {
        super();
        this.state = {
            navBg:"navBgTrans"
        }
    }
    scroll=()=>{
        if(window.scrollY>300){
            this.setState({
                navBg:"navBg"
            })
        }else {
            this.setState({
                navBg:"navBgTrans"
            })
        }
    }
    componentDidMount() {

        window.addEventListener('scroll', this.scroll)
    }

    render() {
        return (
            <>
                <Navbar fixed="top" className={this.state.navBg} expand="lg">
                    <Container>
                        <Navbar.Brand className="navBrand font-weight-bolder" href="#home">Nano Tech</Navbar.Brand>
                        <Navbar.Toggle className="" aria-controls="basic-navbar-nav"><FontAwesomeIcon className="text-white" icon={faBars} /></Navbar.Toggle>

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav  className="ml-auto">
                                <Nav.Link className="navItem" href="#home">Home</Nav.Link>
                                <Nav.Link className="navItem " href="#about">About</Nav.Link>
                                <Nav.Link className="navItem " href="#service">Service</Nav.Link>
                                <Nav.Link className="navItem " href="#project">Project</Nav.Link>
                                <Nav.Link className="navItem " href="#contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default TopNavbar;