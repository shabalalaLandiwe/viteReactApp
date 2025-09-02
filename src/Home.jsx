import Footer from "./Footer";
import Navigation from "./Navigation";
function Home(){
    return(

        <>
            <div className="bg-[#000000] flex h-screen  w-screen text-[#dcdbeb]  " >
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