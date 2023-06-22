import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home"
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
     <Header/>
    <Routes>
      <Route exact path='/' element={<Home/>} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
