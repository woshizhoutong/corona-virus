import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import USA from "./svg-maps/packages/usa";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import TooltipHeatMap from "./components/usa-interactive-map"

function App() {
  return (
    <div className="App">
       <TooltipHeatMap map={USA} />;
    </div>
  );
}
export default App;
