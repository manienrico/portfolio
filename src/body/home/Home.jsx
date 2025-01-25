//import react from "react";
import Nav from "../../components/nav/nav";
import MainSection from "../mainSection/mainSection";
import SideNav from "../sideNav/sidenav";

export default function Home(){
    return(
        <div className="relative bg-black text-white flex flex-col">
          
            <Nav />
            <SideNav />
            <MainSection />
          
            
        </div>
    )
}