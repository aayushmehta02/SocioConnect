import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Post from '././components/Post/Post';
import './App.css';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { Landing } from './components/layout/Landing';
import Posts from "./components/posts/Posts";
import Addeducation from "./components/profile-form/Addeducation";
import Createprofile from "./components/profile-form/Createprofile";
import Editprofile from "./components/profile-form/Editprofile";
import Profile from "./components/profile/Profile";
//redux
import { useEffect } from "react";
import { Provider } from 'react-redux';
import { loadUser, setAuthToken } from './actions/auth';
import Dashboard from "./components/dashboard/Dashboard";
import Notfound from "./components/layout/Notfound";
import Addexperience from "./components/profile-form/Addexperience";
import Profiles from "./components/profiles/Profiles";
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
        <Route exact path="/add-education" Component={Addeducation}/>
        <Route exact path="/add-experience" Component={Addexperience}/>
        <Route exact path='/profiles' Component={Profiles}/>
        <Route exact path="/profile/:id" Component={Profile} />
        <Route exact path="/posts"  Component={Posts} />
        <Route exact  path="/post/:id" Component={Post}/> 
        <Route Component={Notfound}/>
        <Route exact path="/create-profile" Component={Createprofile}/>
        </Routes>
        
      
        
    
    </Router>
    </Provider>
   
  )
}

export default App
