import React from 'react'
import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Admin from './components/Admin'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import About from './components/About'
import Create from './components/Create'
import Update from './components/Update'
import Header from './shared/Header'
import Footer from './shared/Footer'

function App() {

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || {}
  );
  
  
  return (
    <div className="App">
      <Header user={user} setUser={setUser}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Admin' element={<Admin />} />
          <Route path='/Create' element={<Create />} />
          <Route path='/login' element={<Login />} user={user} setUser={setUser} />
          <Route path='/Signup' element={<Signup />} user={user} setUser={setUser} />
          <Route path='Update' element={<Update />} />
        </Routes>
      <Footer />
      <Home />
      <Login user={user} setUser={setUser}/>
      <About />
      <Create />
      <Update />
      <Admin />
    </div>
  );
}

export default App;