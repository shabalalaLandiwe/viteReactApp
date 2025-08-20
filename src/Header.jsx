

function Header(){
    // return() in React doesn’t return just one component — 
    // it returns one JSX expression,
    return(
        <header> 
            <h1>Artisans</h1>

            <nav>
                <ul>
                    <li className="home links"><a href="">Home</a></li>
                    <li className="home links"><a href="">About</a></li>
                    <li className="home links" ><a href="">Sign up</a></li>
                    
                    <li></li>
                </ul>
                {/* horintal  line */}
                <hr></hr>
            </nav>

        </header>
    );

}


// ?allows to import function/component into other components
export default Header