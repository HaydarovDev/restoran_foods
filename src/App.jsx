import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Category from "./components/Category/Category";
import Location from "./components/Location/Location";

const App = () => {
  return (
    <>
      <div className="hidden lg:block">
        <h1>this site works only on mobile</h1>
      </div>
      <Header />
      <Nav />
      <Category />
      <Location />
    </>
  );
};

export default App;
