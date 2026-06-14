import React from "react";
import Search from "./components/Search";

const App = () => {
  return (
    <main>
      <div className="pattern"></div>

      <div className="wrapper">
        <header>
          <img src="./public/hero.png" alt="Hero Image"></img>
          <h1>
            Discover Amazing <span className="text-gradient">Movies</span>
            Without Endless Searching
          </h1>
        </header>

        <Search />
      </div>
    </main>
  );
};

export default App;
