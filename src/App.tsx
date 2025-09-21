// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Footer from'./Footer.jsx';
import Login from './_auth/Forms/Login';
import Home from './_root/Pages/Home.jsx';
import Register from './_auth/Forms/Register';
import AuthLayout from './_auth/AuthLayout.jsx';
import RootLayout from './_root/RootLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Primary router component
function App(){
  // const [count, setCount] = useState(0)
  
  return(
    //  use fragment to return multiple compenents
    <main className = "flex h-screen">
    
      {/* Routes & Routes are typically in the main layout of application. i.e app.jsx*/}
      {/* Routes and Route define your routing configuration */}
      {/* Routes: a container for all my route definitions */}
            
      <Routes>
        {/* puvlic routes */}
        <Route element={<AuthLayout/>}>
          <Route path='/Register' element={<Register/>}/>
          <Route path="/Login" element={<Login/>}/>
        
        </Route>

        {/* private routes */}
        <Route element={<RootLayout/>} >
          <Route path="/" element ={<Home/>}/>

        </Route>

      </Routes>
      
      <Footer/>    
    </main>
  
  );
}

export default App
