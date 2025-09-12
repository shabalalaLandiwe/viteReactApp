import { Link } from "react-router-dom";
const Login =() =>{
    return(
        <div className="Registration-page p-6 bg-[#000000] 
        text-[#dcdbeb]  h-screen  ">
            <h1 className="p-3"> Sign In</h1>

            <form className=""> 
                <label className="pr-3"/> Username :
                <input type="text" className="bg-[#000000] 
                pl-2 text-[#dcbdeb] 
                border focus:outline-none focus:ring-0 focus:border-white" 
                placeholder="Type here..."
                    />
                

                 <label/> password :
                <input type="text" className="bg-[#000000] 
                pl-1 text-[#dcbdeb] 
                border focus:outline-none focus:ring-0 focus:border-white" 
                placeholder="Type here..."/>
                
            </form>

            <div className="p-2">
                <Link>
                    <button>Sign-in</button>
                </Link>
            </div>

            <div className="p-3">
                <h5> Want to register?</h5>
                <Link>
                    Sign-up
                </Link>
            </div>
            


        </div>
    );
}

export default Login