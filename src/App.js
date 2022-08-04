import "./App.css";
import React from 'react';
import ListOfGifs from "./components/ListOfGifs";

export default function App() {
 
  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifs keyword='spidermannowayhome' />
      </section>
    </div>
  );
}
