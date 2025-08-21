import { Link } from "react-router-dom";
function Login(){
    return(
        <div className="Registration-page">
            <h1>Sign In</h1>

            <form>
                <label> Username
                    <input type="text" ></input>
                </label>

                 <label> password 
                    <input type="text"></input>
                </label>
            </form>

            <div>
                <Link>
                <button>Submit</button>
                </Link>
            </div>

        </div>
    );
}

export default Login