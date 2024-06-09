import { useState } from "react";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  const [darkMode, setDarkMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#1E1E1E";
      showAlert("Dark Mode Activated", "Success");
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "#cccccc";
      showAlert("Light Mode Activated", "Success");
    }
  };

  return (
    <>
    
    <Router>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={darkMode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact  path="/about"  element={<AboutUs />}>
          </Route>
          <Route exact  path="/"  element={ <TextArea showAlert={showAlert} mode={darkMode} />}>
           
          </Route>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
