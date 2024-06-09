import { useState } from "react";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
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

  const [customThemeText, setCustomThemeText] = useState({
    color: "#353535",
  });

  const [customThemeNav, setCustomThemeNav] = useState({
    color: "#ffffff",
    backgroundColor: "#6200EE",
  });

  const lightTheme = () => {
    console.log("Light Theme button hit");
    setCustomThemeNav({
      color: "#353535",
      backgroundColor: "#e0e0e0  ",
    });
    setCustomThemeText({
      color: "#353535",
    })
    document.body.style.backgroundColor="#FFFFFF";
    document.getElementsByClassName("content").color="#353535";
  };

  const darkTheme = () => {
    console.log("Dark theme hit");
    setCustomThemeNav({
      color: "#E0E0E0 ",
      backgroundColor: "#121212   ",
    });
    setCustomThemeText({
      color: "#E0E0E0",
    })
    document.body.style.backgroundColor="#212529";
  };

  const proTheme = () => {
    console.log("Pro theme hit");
    setCustomThemeNav({
      color: "#F1E4E8 ",
      backgroundColor: "#260042  ",
    });
    setCustomThemeText({
      color: "#F1E4E8",
    })
    document.body.style.backgroundColor="#4B0082";
  };

  // const toggleMode = () => {
  //   if (darkMode === "light") {
  //     setDarkMode("dark");
  //     document.body.style.backgroundColor = "#1E1E1E";
  //     showAlert("Dark Mode Activated", "Success");
  //   } else {
  //     setDarkMode("light");
  //     document.body.style.backgroundColor = "#cccccc";
  //     showAlert("Light Mode Activated", "Success");
  //   }
  // };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About"
          // mode={darkMode}
          // toggleMode={toggleMode}
          toggleLight={lightTheme}
          toggleDark={darkTheme}
          togglePro={proTheme}
          theme={customThemeNav}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<AboutUs />}></Route>
            <Route
              exact
              path="/"
              element={<TextArea showAlert={showAlert} 
              theme={customThemeNav} 
              colorText={customThemeText}/>}
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
