import { Link } from "react-router-dom";

function Navigation(){
    return(
    // {/*  'flex and inline-table have apply the same propeties but flex handles 
    //     them as separate containers */}
        <>
            <div class ="flex flex-col space-y-2 bg-[#1f2224] w-45 h-60  p-3">
                <h2 className=""> Shop</h2>
                
                <div class="inline-grid" >
                        {/* Link: Creates navigation links that update the URL */}
                    <Link to ="/">Clothes & Shoes</Link>  {" "}
                </div>
                <div class="inline-grid">
                        {/* <Link to ="/about">About</Link>  */}
                    <Link to ="/Login"> Art</Link> 
                </div>
                <div class="inline-grid">
                        {/* <Link to ="/about">About</Link>  */}
                    <Link to ="/Login">Beauty</Link> 
                </div>
                <div class="inline-grid">
                        {/* <Link to ="/about">About</Link>  */}
                    <Link to ="/Login">Furniture</Link> 
                </div>
                <div class="inline-grid">
                        {/* <Link to ="/about">About</Link>  */}
                    <Link to ="/Login">Services</Link> 
                </div>
                
                    
            </div>
        </>    
    );
}

export default Navigation