import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { Landing } from './components/layout/Landing';
import { Navbar } from './components/layout/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
       <>
      
        <Navbar/>
        <Routes>
        
        <Route exact path='/' Component={Landing} />
        <Route exact path='/register' Component={Register}/>
        <Route exact path='/login' Component={Login}/>
        </Routes>
        
      
        
    </>
    </Router>
   
  )
}

export default App
