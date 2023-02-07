import React from "react";

import { About, Footer, Header, Services, Testimonials } from "./container";
import { Navbar } from "./components";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Services />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default App;
