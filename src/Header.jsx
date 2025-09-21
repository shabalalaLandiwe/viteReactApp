import { Link } from "react-router-dom";
// import Login from './Login.jsx';
// import Home from "./Home.jsx";

function Header(){
    // return() in React doesn’t return just one component — 
    // it returns one JSX expression,
    return(
        <>
            <header className="bg-[#F0F3FA] space-x-10  w-screen inline-flex p-5"> 
                <div className="row-start-1 min-h-18 text-[#395886] "  >
                    <h1 class="p-2">Manni</h1>
                    <h4 class="pl-3"> A community of Artisans </h4>
                </div>

                <div className="inline-grid space-x-50 space-x-reverse">
                        {/* <Link to ="/about">About</Link>  */}
                    <Link to ="/Login">Sign-in</Link> 
                </div>
                 <div className="inline-grid" >
                        {/* Link: Creates navigation links that update the URL */}
                        {/* "/" renders home as the root element */}
                        {/* This mean this page will load on page by default */}
                    <Link to ="/">Home</Link>  {" "}
                </div>
                <div className="inline-grid">
                        {/* <Link to ="/about">About</Link>  */}
                    <Link to ="/Login">Profile</Link> 
                </div>
                <div className="inline-grid">
                        {/* <Link to ="/about">About</Link>  */}
                    <Link to ="/Login">Feed</Link> 
                </div>

                
            </header>

        
        </>
    );

}


// ?allows to import function/component into other components
export default Header