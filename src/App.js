import React from 'react'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'





function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Navigate to="signUp"/>}/>
    <Route path='/signUp' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>
    
    

    </Routes>
    
    </BrowserRouter>
  )
}

export default App