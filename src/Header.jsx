import { Link } from "react-router-dom";
// import Login from './Login.jsx';
// import Home from "./Home.jsx";

function Header(){
    // return() in React doesn’t return just one component — 
    // it returns one JSX expression,
    return(
        <header class="bg-amber-700 opacity-60 flex-2 p-5"> 
            <div class="row-start-1 min-h-18 inline-table"  >
                <h1 class="text-blue-950 backdrop-opacity-100 p-2">Artist hands</h1>
                <h4 class="pl-3"> A community of Artisans </h4>
            </div>

{/*  'flex and inline-table have apply the same propeties but flex handles 
them as separate containers */}
            <div class ="flex ma flex-row-reverse  space-x-4 space-x-reverse">
                
                <div class="inline-grid mt-" >
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