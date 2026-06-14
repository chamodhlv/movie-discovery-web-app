import React from "react";
import Search from "./components/Search.jsx";

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <main>
      <div className="pattern"></div>

      <div className="wrapper">
        <header>
          <img src="./public/hero5.png" alt="Hero Image"></img>
          <h1>
            Discover Amazing <span className="text-gradient">Movies </span>
            Without the Hassle
          </h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </main>
  );
};

export default App;
