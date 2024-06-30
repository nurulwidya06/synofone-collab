//import components
import BrandComponent from "../components/BrandComponent";
import CarouselComponent from "../components/CarouselComponent";
import FooterComponent from "../components/FooterComponent";
import NavComponent from "../components/NavComponent";
import NavbarComponent from "../components/NavbarComponent";
import SmartphoneComponent from "../components/SmartphoneComponent";
import UnggulanComponent from "../components/UnggulanComponent";


const LandingPage = () =>{
    return(
        <>
            <NavbarComponent/>
            <div id="banner">
                <CarouselComponent/>
                <BrandComponent/>
            </div>

            <div id ="unggulan">
                <UnggulanComponent Category={"Unggulan"}/>
            </div>

            <div id="lainnya">
                <UnggulanComponent Category={"Lainnya"}/>
            </div>

            <div id="footer">
                <FooterComponent/>
            </div>
        </>
    );
}

export default LandingPage;