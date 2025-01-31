//import react from "react";
import Nav from "../../components/nav/nav";
import Footer from "../Footer/Footer";
import MainSection from "../mainSection/mainSection";
import SideNav from "../sideNav/sidenav";

export default function Home(){
    return(
        <div className="flex flex-col bg-black text-white overflow-hidden">
            <Nav />
            <SideNav />
            <div className="static flex flex-col">
                <MainSection />
                <Footer />
            </div>
        </div>
    )
}