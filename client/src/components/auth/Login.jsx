import axios from 'axios'
import { React, useState } from 'react'
import { Link } from 'react-router-dom'
export const Login = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })



    const {name, email, password, password2} = formData

     function onChange(e){
        setFormData({...formData,[e.target.name] : e.target.value})
        
    } 

    async function onSubmit(e){
        e.preventDefault()
      
           

           try {
            const newUser = {
                
                email,
                password
               }
               if ( !email || !password) {
                throw new Error(" email, and password are required");
            }
             console.log(newUser);
                const config = {

                    headers: {
                        'Content-Type': 'application/json'
                    }

                }
                const body = JSON.stringify(newUser)
                console.log(body)
                const res = await axios.post('http://localhost:5000/api/auth', body, config)
                console.log(res);

           } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an error
                console.log('Error', error.message);
            }
           }
        
    }
  return (
    <div>
    <section className="container">
<h1 className="large text-primary">Log In</h1>

<form className="form" onSubmit={e => onSubmit(e)}>

<div className="form-group">
 <input type="email" placeholder="Email Address" name="email" required value={email} onChange={e=> onChange(e)} />

</div>
<div className="form-group">
 <input
   type="password"
   placeholder="Password"
   name="password"
   minLength="6"
   required value={password} onChange={e=> onChange(e)}
 />
</div>

<input type="submit" className="btn btn-primary" value="Login" />
</form>
<p className="my-1">
Don't have an account? <Link to={'/register'}>Sign Up</Link>
</p>
</section>
</div>
  )
  }
