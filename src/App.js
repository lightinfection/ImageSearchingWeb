import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
//import Trial from "./components/Try";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import "./styles/style.css";

function App() {
  //let [name, setname] = useState("Mike");
  //const changename = () => {
  //  setname("Gyro");
  //};
  //useEffect(() => {
  //  console.log("function is running");
  //}, [name, setname]);
  //$("#hello").click(() => {
  //  alert("you are clicking on an url link");
  //});
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/about" exact element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
