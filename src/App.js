import {Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Success from "./pages/Success";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/success" element={<Success />} />
    </Routes>
    </>
  );
}

export default App;
