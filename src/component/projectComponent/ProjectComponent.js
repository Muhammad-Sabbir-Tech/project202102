import React, {Component} from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Card, Container} from "react-bootstrap";
import img1 from  '../../asset/images/pro (1).jpg'
import img2 from  '../../asset/images/pro (2).jpg'
import img3 from  '../../asset/images/pro (3).jpg'
import img4 from  '../../asset/images/pro (4).jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

class ProjectComponent extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                }
            ]
        };
        return (
            <>
                <Container id="project" className="text-center generaLTopSpace">
                    <h4 className="sectionTitle mb-4">Project</h4>
                    <Slider {...settings}>
                        <div data-aos='zoom-in' className="mb-5 ">
                            <Card className="mx-md-2 text-center projectCard">
                                <img src={img4} className="img-fluid " alt="img"/>

                                    <div className="px-2">
                                        <h5 className="pt-2 overflow-hidden">Lorem Ipsum Dolor</h5>
                                        <p className="text-muted mb-0 pb-0">Some quick example text to build on the card title and make up the bulk of
                                            the card's content.</p>
                                        <div className="text-center">
                                            <button className="btn btn-primary btn-sm px-3  my-2">More</button>
                                        </div>
                                    </div>
                            </Card>
                        </div>

                        <div data-aos='zoom-in' className="mb-5 ">
                            <Card className="mx-md-2 text-center projectCard">
                                <img src={img3} className="img-fluid " alt="img"/>

                                <div className="px-2">
                                    <h5 className="pt-2 overflow-hidden">Lorem Ipsum Dolor</h5>
                                    <p className="text-muted mb-0 pb-0">Some quick example text to build on the card title and make up the bulk of
                                        the card's content.</p>
                                    <div className="text-center">
                                        <button className="btn btn-primary btn-sm px-3  my-2">More</button>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <div data-aos='zoom-in' className="mb-5 ">
                            <Card className="mx-md-2 text-center projectCard">
                                <img src={img2} className="img-fluid " alt="img"/>

                                <div className="px-2">
                                    <h5 className="pt-2 overflow-hidden">Lorem Ipsum Dolor</h5>
                                    <p className="text-muted mb-0 pb-0">Some quick example text to build on the card title and make up the bulk of
                                        the card's content.</p>
                                    <div className="text-center">
                                        <button className="btn btn-primary btn-sm px-3  my-2">More</button>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <div data-aos='zoom-in' className="mb-5 ">
                            <Card className="mx-md-2 text-center projectCard">
                                <img src={img1} className="img-fluid " alt="img"/>

                                <div className="px-2">
                                    <h5 className="pt-2 overflow-hidden">Lorem Ipsum Dolor</h5>
                                    <p className="text-muted mb-0 pb-0">Some quick example text to build on the card title and make up the bulk of
                                        the card's content.</p>
                                    <div className="text-center">
                                        <button className="btn btn-primary btn-sm px-3  my-2">More</button>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <div data-aos='zoom-in' className="mb-5 ">
                            <Card className="mx-md-2 text-center projectCard">
                                <img src={img4} className="img-fluid " alt="img"/>

                                <div className="px-2">
                                    <h5 className="pt-2 overflow-hidden">Lorem Ipsum Dolor</h5>
                                    <p className="text-muted mb-0 pb-0">Some quick example text to build on the card title and make up the bulk of
                                        the card's content.</p>
                                    <div className="text-center">
                                        <button className="btn btn-primary btn-sm px-3  my-2">More</button>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <div data-aos='zoom-in' className="mb-5 ">
                            <Card className="mx-md-2 text-center projectCard">
                                <img src={img3} className="img-fluid " alt="img"/>

                                <div className="px-2">
                                    <h5 className="pt-2 overflow-hidden">Lorem Ipsum Dolor</h5>
                                    <p className="text-muted mb-0 pb-0">Some quick example text to build on the card title and make up the bulk of
                                        the card's content.</p>
                                    <div className="text-center">
                                        <button className="btn btn-primary btn-sm px-3  my-2">More</button>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <div data-aos='zoom-in' className="mb-5 ">
                            <Card className="mx-md-2 text-center projectCard">
                                <img src={img2} className="img-fluid " alt="img"/>

                                <div className="px-2">
                                    <h5 className="pt-2 overflow-hidden">Lorem Ipsum Dolor</h5>
                                    <p className="text-muted mb-0 pb-0">Some quick example text to build on the card title and make up the bulk of
                                        the card's content.</p>
                                    <div className="text-center">
                                        <button className="btn btn-primary btn-sm px-3  my-2">More</button>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <div data-aos='zoom-in' className="mb-5 ">
                            <Card className="mx-md-2 text-center projectCard">
                                <img src={img1} className="img-fluid " alt="img"/>

                                <div className="px-2">
                                    <h5 className="pt-2 overflow-hidden">Lorem Ipsum Dolor</h5>
                                    <p className="text-muted mb-0 pb-0">Some quick example text to build on the card title and make up the bulk of
                                        the card's content.</p>
                                    <div className="text-center">
                                        <button className="btn btn-primary btn-sm px-3  my-2">More</button>
                                    </div>
                                </div>
                            </Card>
                        </div>



                    </Slider>
                </Container>
            </>
        );
    }
}

export default ProjectComponent;