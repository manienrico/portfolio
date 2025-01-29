//import react from "react";
import Nav from "../../components/nav/nav";
import Footer from "../Footer/Footer";
import MainSection from "../mainSection/mainSection";
import SideNav from "../sideNav/sidenav";

export default function Home(){
    return(
        <div className="flex flex-col bg-black text-white overflow-hidden">
            <div className="relative  flex flex-col">
                <Nav />
                <SideNav />
                <MainSection />
            </div>
            
            <Footer />
        </div>
    )
}