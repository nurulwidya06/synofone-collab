// import Component

import BrandComponent from "../../components/customer/BrandComponent";
import CarouselComponent from "../../components/customer/CarouselComponent";
import FooterComponent from "../../components/customer/FooterComponent";
import NavbarComponent from "../../components/customer/NavbarComponent";
import UnggulanComponent from "../../components/customer/UnggulanComponent";



const LandingPage = () => {
    return (
        <>
        <NavbarComponent/>

            <div id="banner">
                <CarouselComponent/>
                <BrandComponent/>
            </div>
            
            <UnggulanComponent kategori={"Unggulan"}/>
            <UnggulanComponent kategori={"Lainnya"}/>

<FooterComponent/>
        </>
    );
}

export default LandingPage;