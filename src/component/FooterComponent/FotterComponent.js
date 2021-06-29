import React, {Component} from 'react';
import {Container} from "react-bootstrap";

class FotterComponent extends Component {
    render() {
        return (
            <>
                <Container className="footerBg mt-5" fluid={true}>
                    <Container className="text-white text-center py-4">
                        <p className="mb-0">&copy; All Right Reserve Muhammad Sabbir 2021-2022</p>
                    </Container>
                </Container>
            </>
        );
    }
}

export default FotterComponent;