
import axios from 'axios'
import { React, useState } from 'react'
export const Register = () => {

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
        if (password !== password2) {
            alert("Passwords do not match")
        } else {
           

           try {
            const newUser = {
                name,
                email,
                password
               }
             console.log(newUser);
                const config = {

                    headers: {
                        'Content-Type': 'application/json'
                    }

                }
                const body = JSON.stringify(newUser)
                console.log(body)
                const res = await axios.post('/api/users', body, config)
                console.log(res);

           } catch (error) {
            console.log(error)
           }
        }
    }
  return (
    <div>
             <section className="container">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="Name" name="name" required value={name} onChange={e=> onChange(e)} />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" required value={email} onChange={e=> onChange(e)} />
          <small className="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small>
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
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            required value={password2} onChange={e=> onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <a href="login.html">Sign In</a>
      </p>
    </section>
    </div>
  )
}
