import Admin from './components/Admin'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import Create from './components/Create'
import Update from './components/Update'
import Header from './shared/Header'
import Footer from './shared/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Login />
      <About />
      <Create />
      <Update />
      <Admin />
      <Footer />
    </div>
  );
}

export default App;