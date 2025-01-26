import Logo from "../logo/logo";

export default function Nav(){
    return(
        <header >
            <nav className="flex justify-between " >
                <div>
                    <Logo />
                </div>
                
                <div className="relative text-lg">
                    <p className="absolute right-0">ABHIRAJ</p>
                    <div className="absolute right-0 top-7 text-red-400 font-bold text-xl">ADHIKARY</div>
                </div>
            </nav>
        </header>
    )
}