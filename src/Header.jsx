import { Link } from "react-router-dom";
// import Login from './Login.jsx';
// import Home from "./Home.jsx";

function Header(){
    // return() in React doesn’t return just one component — 
    // it returns one JSX expression,
    return(
        <header class="bg-[#28363D] space-x-10 text-[#DEE1DD]  w-screen inline-flex p-5"> 
            <div class="row-start-1 min-h-18 text-[#DEE1DD] "  >
                <h1 class="p-2">Artist hands</h1>
                <h4 class="pl-3"> A community of Artisans </h4>
            </div>

{/*  'flex and inline-table have apply the same propeties but flex handles 
them as separate containers */}
            <div class ="flex  space-x-90 space-x-reverse">
                
                <div class="inline-grid pr-10" >
                        {/* Link: Creates navigation links that update the URL */}
                    <Link to ="/">Home</Link>  {" "}
                </div>
                <div class="inline-grid">
                        {/* <Link to ="/about">About</Link>  */}
                    <Link to ="/Login">Sign-up</Link> 
                </div>
                   
            </div>
        </header>
    );

}


// ?allows to import function/component into other components
export default Header