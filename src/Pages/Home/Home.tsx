import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import AboutSection from "../../Components/AboutSection/AboutSection";
import ContactForm from "../../Components/ContactForm/ContactForm";
import EducationSection from "../../Components/EducationSection/EducationSection";
import ExperienceSection from "../../Components/ExperienceSection/ExperienceSection";
import FooterSection from "../../Components/FooterSection/FooterSection";
import Header from "../../Components/Header/Header";
import HeroSection from "../../Components/HeroSection/HeroSection";
import PortfolioSection from "../../Components/PortfolioSection/PortfolioSection";
import SkillsSection from "../../Components/SkillsSection/SkillsSection";
import '../../Static/StyleSheets/global.css';
import '../../Static/StyleSheets/header.css';

const Home = () => {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <AboutSection/>
            <ExperienceSection/>
            <SkillsSection/>
            <PortfolioSection/>
            <EducationSection/>
            {/* <ServicesSection/> */}
            {/* <TestimonialSection/> */}
            <ContactForm/>
            {/* <BlogSection/> */}
            <FooterSection/>
        </div>
    );
};

export default Home;
