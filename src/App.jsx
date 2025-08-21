// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Footer from'./Footer.jsx';
import Header from './Header.jsx';
import Login from './Login.jsx';
import Home from './Home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Primary router component
function App(){
  // const [count, setCount] = useState(0)
  
  return(
    //  use fragment to return multiple compenents
    <BrowserRouter>
      <Header/>
      {/* Routes & Routes are typically in the main layout of application. i.e app.jsx*/}
      {/* Routes and Route define your routing configuration */}
      {/* Routes: a container for all my route definitions */}
            
      <Routes>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
      <Home/>
      <Footer/>    
    </BrowserRouter>
  
  );
}

export default App
