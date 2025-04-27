import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Menu from "./pages/Menu";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Chatbot from "./shared/Chatbot";

function App() {
  return (
    <Router>
      <Header />
      <Chatbot />
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
