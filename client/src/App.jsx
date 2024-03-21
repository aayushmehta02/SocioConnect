import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { Landing } from './components/layout/Landing';
import { Navbar } from './components/layout/Navbar';
//redux
import { useEffect } from "react";
import { Provider } from 'react-redux';
import { loadUser } from './actions/auth';
import store from './store';




// if(localStorage.token){
//   setAuthToken(localStorage.token);
//   console.log(localStorage.token)
// }
function App() {
    useEffect(()=>{
      store.dispatch(loadUser())
    },[])
  
  return (
    <Provider store={store}>
    <Router>
      
      
        <Navbar/>
        
      
        
        <Routes>
        
        <Route exact path='/' Component={Landing} />
        <Route exact path='/register' Component={Register} />
        <Route exact path='/login' Component={Login}/>
        </Routes>
        
      
        
    
    </Router>
    </Provider>
   
  )
}

export default App
