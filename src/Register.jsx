
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
        password:'',

    })


// This function will dynamically update the corresponding field in the formData object
//  based on the name attribute of the input that triggered the change.
    const HandleChange = (e) => {

        // Optional: prevents page reload if used in a form
        e.preventDefault();  
        const{name, value} = e.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]:value,
        }));
    };

    return(
        <form>
            <label>Name:
                <input type="text" name="name" 
                value={formData.Name}  onChange={HandleChange} />
            </label>
            <label >Surname:
                <input type="text" name="surnamename" 
                value={formData.Surname}  onChange={HandleChange}/>
            </label>
            <label>ID:
                <input type="text" name="name" 
                value={formData.ID}  onChange={HandleChange}/>
            </label>
            <label>Birthday:
                <input type="text" name="birthday" 
                value={formData.Birthday}  onChange={HandleChange} />
            </label>
            <label> Address Line 1
                <input type="text" name="addressline1" 
                value={formData.AddressLine1}  onChange={HandleChange}/>
            </label>
            <label> Address Line 2
                <input type="text" name="addressline2" 
                value={formData.AddressLine2}  onChange={HandleChange}/>
            </label>
            <label> Address Line 
                
                <input type="text" name="addressline3" 
                value={formData.AddressLine3}  onChange={HandleChange}/>
            </label>
            <label > Email:
                <input type="text" name="email" 
                value={formData.email}  onChange={HandleChange}/>
            </label>
            <label >Create password:
                <input type="int" name="password" 
                value={formData.password}  onChange={HandleChange}/>
            </label>

        </form>
    );

}

export default Register