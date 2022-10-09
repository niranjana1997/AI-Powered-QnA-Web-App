import logo from './logo.svg';
import './App.css';

// 
import React, {useEffect,useState,useRef} from 'react'

// Importing dependencies
// 1. Importing Tensorflow JS
import * as tf from "@tensorflow/tfjs";
// 2. Importing QnA model from Tensorflow
import * as qna from "@tensorflow-models/qna";
// 3. Importing CSS 
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// 4. 
import Loader from "react-loader-spinner";
// 5. 
import { Fragment } from 'react';


// Setting up state hooks and references
const refpassage = useRef(null);
const refq = useRef(null);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
