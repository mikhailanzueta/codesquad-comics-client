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
import Delete from './components/Delete'
import Header from './shared/Header'
import Footer from './shared/Footer'
import Details from './components/Details'

import './css/styles.css'

function App() {

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    try {
      return storedUser ? JSON.parse(storedUser) : {};
    } catch (error) {
      console.error('Error parsing JSON from localStorage', error);
      return {};
    }
  });
  
  
  return (
    <div className="App">
      <Header user={user} setUser={setUser}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Admin' element={<Admin />} />
          <Route path='/Create' element={<Create />} />
          <Route path='/Signup' element={<Signup  user={user} setUser={setUser}/>}/>
          <Route path='/Login' element={<Login  user={user} setUser={setUser}/>}/>
          <Route path='/Update' element={<Update />} />
          <Route path='/books/:bookId/Update' element={<Update />} />
          <Route path='/Delete' element={<Delete />} />
          <Route path='/books/:bookId/Delete' element={<Delete />} />
          <Route path='/Details/:bookId' element={<Details />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;