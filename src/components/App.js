import React from "react";
import Header from "./Header";
import Home from "./Home";
import { Route, Routes, Navigate } from "react-router-dom";
import UpdateSection from "./UpdateSection";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/update" element={<UpdateSection />} />
        </Routes>
      </div>
    );
  }
}

export default App;
