import React from "react";
import Form from "./components/Form/Form";
import FlightsList from "./components/FlightsList/FlightsList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Form />
      <FlightsList />
    </div>
  );
}

export default App;
