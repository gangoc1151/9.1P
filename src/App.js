import React from "react";

import "./App.css";
import Nav from "./Nav";
import Cover from "./Cover";
import CardList from "./CardList";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Nav />
      <Cover />
      <h3>Feature Requesters</h3>
      <CardList />
      <Footer />
    </div>
  );
}

export default App;
