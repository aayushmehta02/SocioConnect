import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { Landing } from './components/layout/Landing';
import Createprofile from "./components/profile-form/Createprofile";
import Editprofile from "./components/profile-form/Editprofile";
//redux
import { useEffect } from "react";
import { Provider } from 'react-redux';
import { loadUser, setAuthToken } from './actions/auth';
import Dashboard from "./components/dashboard/Dashboard";
import store from './store';




if(localStorage.token){
  setAuthToken(localStorage.token);
  console.log(localStorage.token)
}
function App() {
    useEffect(()=>{
      store.dispatch(loadUser())
    },[])
  
  return (
    <Provider store={store}>
    <Router>
      
      
        {/* <Navbar/> */}
        
      
        
        <Routes>
        
        <Route exact path='/' Component={Landing} />
        <Route exact path='/register' Component={Register} />
        <Route exact path='/login' Component={Login}/>
        <Route exact path="/dashboard" Component={Dashboard}/>
        <Route exact path="/profile" Component={Createprofile} />
        <Route exact path="/edit-profile" Component={Editprofile}/>
        </Routes>
        
      
        
    
    </Router>
    </Provider>
   
  )
}

export default App
