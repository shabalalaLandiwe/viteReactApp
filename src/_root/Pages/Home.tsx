import Footer from "./Footer";
import Navigation from "./Navigation";

// use const so that the omepage is not overwriten due to bugs
const Home =() => {
    return(

        <>
            <div className="bg-[#000000] flex h-screen  w-screen text-[#F0F3FA]  " >
                <div>
                    <Navigation/>
                </div>
                
                <div>
                    <h1> HOOOOOOOMMMMMEEEE</h1>
                </div>
            </div>

            <Footer/>

        </>
        
    );
}

export default Home 