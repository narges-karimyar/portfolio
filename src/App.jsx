import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./Components/Nav";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import More from "./Components/More";

function Home() {
  return (
    <>
      <Nav />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/More" element={<More />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
