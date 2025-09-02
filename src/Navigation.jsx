import { Link } from "react-router-dom";

function Navigation(){
    return(
    // {/*  'flex and inline-table have apply the same propeties but flex handles 
    //     them as separate containers */}
        <>
            <div class ="flex flex-col space-y-2 bg-[#1f2224] w-30 h-60">
                
                <div class="inline-grid" >
                        {/* Link: Creates navigation links that update the URL */}
                    <Link to ="/">Home</Link>  {" "}
                </div>
                <div class="inline-grid">
                        {/* <Link to ="/about">About</Link>  */}
                    <Link to ="/Login">Profile</Link> 
                </div>
                <div class="inline-grid">
                        {/* <Link to ="/about">About</Link>  */}
                    <Link to ="/Login">Feed</Link> 
                </div>
                    
            </div>
        </>    
    );
}

export default Navigation