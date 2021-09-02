import React from "react";

const api = {
  key: "84d7295c7d8dcfbe0814bff5bff6ef39",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input className="search-bar" type="text" placeholder="Search..." />
        </div>
      </main>
    </div>
  );
}

export default App;
