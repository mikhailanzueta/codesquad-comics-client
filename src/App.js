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
import Details from './components/Details'

import './css/styles.css'

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
          <Route path='/Signup' element={<Signup  user={user} setUser={setUser}/>}/>
          <Route path='/Login' element={<Login  user={user} setUser={setUser}/>}/>
          <Route path='/Update' element={<Update />} />
          <Route path='/books/:bookId/Update' element={<Update />} loader = {
            async ({request}) => {
              return await fetch(`http://localhost:8080/api/books`, {
                method: "GET",
            })
                .then((response) => response.json())
                .then(res => res._id)
            }
          } />
          <Route path='/Details/:bookId' element={<Details />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;