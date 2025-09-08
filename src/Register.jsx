
// stores and manages values internally by React itself
// state variables are preserved by React across component re-renders
// this allows the component to maintain and display dynamic data.
import { useState } from "react";

function Register(){

    //  key-value pairs stored in FormData object
    const[formData, setFormData] = useState({
        Name:'',
        Surname:'',
        ID:'',
        Birthday:'',
        AddressLine1:'',
        AddressLine2:'',
        AddressLine3:'',
        PostalCode: '',
        email: '',

    })

    return(
        <form>
            <label>Name:
                <input></input>
            </label>
            <label>Surname:
                <input></input>
            </label>
            <label>ID:
                <input></input>
            </label>
            <label>Birthday:
                <input type="date"></input>
            </label>
            <label> Address Line 1
                <input></input>
            </label>
            <label> Address Line 2
                <input></input>
            </label>
            <label> Address Line 
                
                <input></input>
            </label>
            
            

        </form>
    );

}

export default Register