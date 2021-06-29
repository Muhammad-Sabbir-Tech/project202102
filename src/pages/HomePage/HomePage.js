import React, {Component} from 'react';
import TopNavbar from "../../component/TopNavbar/TopNavbar";
import HomeBanner from "../../component/HomeBanner/HomeBanner";
import AboutComponent from "../../component/AboutComponent/AboutComponent";
import ServiceComponent from "../../component/ServiceComponent/ServiceComponent";
import ProjectComponent from "../../component/projectComponent/ProjectComponent";
import OurClientComponent from "../../component/OurClientComponent/OurClientComponent";
import ContactComponent from "../../component/ContactComponent/ContactComponent";
import FotterComponent from "../../component/FooterComponent/FotterComponent";

class HomePage extends Component {
    componentDidMount() {
        window.scroll(0,0)

    }

    render() {
        return (
            <>
                <TopNavbar/>
                <HomeBanner/>
                <AboutComponent/>
                <ServiceComponent/>
                <ProjectComponent/>
                <OurClientComponent/>
                <ContactComponent/>
                <FotterComponent/>

            </>
        );
    }
}

export default HomePage;