import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./Services";
import Tours from "./components/Tours";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Tours />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
