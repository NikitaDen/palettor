import React from 'react';
import './assets/styles/styles.scss'
import Header from "./components/Header/Header";
import PaletteContainer from "./components/Palette/Palette";
import Info from "./components/Info/Info";

function App() {
  return (
    <div className="App">
      <Header/>
      <Info/>
      <PaletteContainer/>
    </div>
  );
}

export default App;
