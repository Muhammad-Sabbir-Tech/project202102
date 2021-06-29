import React, {Component} from 'react';
import {Container, Row} from "react-bootstrap";
import AOS from 'aos'
import 'aos/dist/aos.css'
class AboutComponent extends Component {
    componentDidMount() {
        // AOS.init({
        //     duration : 3000,
        //
        AOS.init({
            duration:1500,
            offset : 200
        })
        // })

    }

    render() {
        return (
            <>
                <Container     id="about" className=" mb-0  generaLTopSpace AboutConfig mb-5 text-center">
                    <h4 className="sectionTitle">About</h4>
                    <div data-aos='fade-right' className="m-auto">
                        <h5 style={{"font-size":"28px","font-weight":"600","font-family":"Raleway"}} className="">We Teach You How To Improve Your Business Process, And Make The Technology Affortable For You</h5>
                        <p className="text-center mt-4   text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, repudiandae. Eos earum dolores corporis odit deleniti dolor culpa praesentium doloremque voluptas fugiat dolore, laborum nam quis quae non, in cum excepturi repellendus similique? Ex, molestiae. Commodi minus officia iure illo id ab amet. Pariatur tenetur, commodi veritatis neque veniam aliquam!</p>
                    </div>



                </Container>
            </>
        );
    }
}

export default AboutComponent;