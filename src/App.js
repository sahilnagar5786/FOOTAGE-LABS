import { HashRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Upload from "./Components/Upload";
import Videos from "./Components/Videos";


function App() {
  return (
    <HashRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/videos" element={<Videos/>}/>
        <Route path="/upload" element={<Upload/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </HashRouter>
  );
}

export default App;
