import { Link } from 'react-router';
import Navbar from '../Components/Navbar.jsx';
import Hero from '../Components/Hero.jsx';
import Sponsor from '../Components/Sponsor.jsx';
import AboutApp from '../Components/AboutApp.jsx';
import Feature from '../Components/Feature.jsx';
import Review from '../Components/Review.jsx';
import Footer from '../Components/Footer.jsx';



function LandingPages() {
    return(
     <>
        <Navbar/>
        <Hero/>
        <Sponsor/>
        <AboutApp/>
        <Feature/>
        <Review/>
        <Footer/>

    </>

    );
}

export default LandingPages;