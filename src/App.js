import React from 'react'
import { useState } from 'react'
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

  const [user, setUser] = useState({});

  
  return (
    <div className="App">
      <Header user={user} setUser={setUser}/>
      <Home />
      <Login user={user} setUser={setUser}/>
      <Signup user={user} setUser={setUser}/>
      <About />
      <Create />
      <Update />
      <Admin />
      <Footer />
    </div>
  );
}

export default App;