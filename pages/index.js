import AboutSection from "../components/about";
import ContactSection from "../components/contact";
import HeroSection from "../components/hero";
import OtherSection from "../components/other";
import Projects from "../components/projects";
import WorkEx from "../components/workex";
function Landing(){
    return(<>
         <HeroSection />
        <AboutSection />
        <WorkEx />
        <Projects idx="default"/>
        <OtherSection />
        <ContactSection/>
    </>);
}

export default Landing;