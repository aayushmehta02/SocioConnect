import { Fragment, useState } from 'react'
import './App.css'
import { Landing } from './components/layout/Landing'
import { Navbar } from './components/layout/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Fragment>
        <Navbar/>
        <Landing/>
      </Fragment>
        
    </>
  )
}

export default App
