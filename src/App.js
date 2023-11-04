import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";
import ProDetails from "./components/ProDetails";

const App = () => {
  // btn hover effect make the back ground transparent
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:proId" element={<ProDetails />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
