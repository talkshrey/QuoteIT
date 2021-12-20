import Header from "../Components/Header";
import Logo from "../Components/Logo";

export default function FinalHome() {
    return (
        <div>
            <Header/>
            <div className="mt-10 text-center"> 
                <Logo/> 
                <div className="text-white text-4xl font-sans"> QuoteIT </div>
                <div className="text-white text-lg font-sans"> "The best place for the best prices" </div>
            </div> 
        </div>
    )
}