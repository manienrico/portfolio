import Logo from "../logo/logo";

export default function Nav(){
    return(
        <header >
            <nav className="flex justify-between " >
                <div>
                    <Logo />
                </div>
                
                <div className="p-5">ABHIRAJ
                    <span className="p-5">ADHIKARY</span>
                </div>
            </nav>
        </header>
    )
}