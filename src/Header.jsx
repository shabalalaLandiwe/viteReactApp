import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from './Login.jsx';
import Home from "./Home.jsx";

function Header(){
    // return() in React doesn’t return just one component — 
    // it returns one JSX expression,
    return(
        <header className="Header"> 
            <h1>Artisans</h1>

    
            <nav>
                {/* Link: Creates navigation links that update the URL */}
                <Link to ="/">Home</Link> 
                <Link to ="/about">About</Link> 
                <Link to ="/Login">Sign-up</Link> 
            </nav>

            {/* Routes and Route define your routing configuration */}
            {/* Routes: a container for all my route definitions */}
            

        </header>
    );

}


// ?allows to import function/component into other components
export default Header