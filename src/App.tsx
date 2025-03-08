import './App.css'
import Home from "./pages/Home";
import Header from "./shared/Header"
import Footer from "./shared/Footer"
import Menu from './pages/Menu';
import About from './pages/About';

function App() {
  return (
    <>
      <Header />
      <About />
      {/*<Home />
      <Menu />*/}
      <Footer />
    </>
  )
}

export default App
