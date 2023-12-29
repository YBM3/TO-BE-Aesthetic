import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderSection from "./components/HeaderSection";
import HeaderSectionServices from "./components/HeaderSectionServices";
import Main from "./components/Main";
import Services from "./components/Services";
import HeaderAboutUs from "./components/HeaderAboutUs";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="wrapper">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeaderSection />
                  <Main />
                </>
              }
            />
            <Route
              path="/services"
              element={
                <>
                  <HeaderSectionServices />
                  <Services />
                </>
              }
            />
            <Route
              path="/aboutUs"
              element={
                <>
                  <HeaderAboutUs />
                  <AboutUs />
                </>
              }
            />
          </Routes>
          <ContactUs />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
