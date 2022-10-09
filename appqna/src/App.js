import React, {useRef, useEffect, useState} from 'react';
import './App.css';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing dependencies
// 1. Importing Tensorflow JS
import * as tf from "@tensorflow/tfjs";
// 2. Importing QnA model from Tensorflow
import * as qna from "@tensorflow-models/qna";

import {Vortex} from "react-loader-spinner";
import { Fragment } from 'react';


const App = () => {

  // Setting up states and references
  const refParagraph = useRef(null); 
  const refQuestion = useRef(null);
  const [answer, setAnswer] = useState(); 
  const [model, setModel] = useState(null); 

  // Loading Tensorflow model
  const loadTFModel = async () => {
    const loadedTFModel = await qna.load();
    setModel(loadedTFModel); 
    console.log('Message: Tensorflow Model loaded');
  } 

  // Handling Questions
  const questionanswer = async (e) => {
    // checks if the model is loaded and if the user enters 'return' key on the keyboard
    if (model !== null) {
      console.log('Message: Question submitted');
      // getting the question value
      const question = refQuestion.current.value;
      // getting the paragraph value
      const paragraph = refParagraph.current.value;
      
      // uses BERT model to find answers
      const answer = await model.findAnswers(question, paragraph);
      setAnswer(answer); 
      console.log(answer);
    }  
  }

  // To run the function loadTensorflowModel
  // [] runs the function loadTensorflowModel only once
  useEffect(()=>{loadTFModel()}, [])

  // 2. Setting up paragraph, question and answer area
  return (
    <div className="App">
      <header className="App-header">
        {model ==null ? 
          // Checks if the model is not loaded
          <div>
            <div>
              Loading...
            </div>      
            <Vortex
            type="Puff"
            color="blue"
            height={100}
            width={100}/>
          </div> 
          :  
          // If the mode is loaded
          <Fragment>
            Paragraph:
            <textarea ref={refParagraph} rows="5" cols="50"></textarea>
            Question:
            <input ref={refQuestion} size="15"></input>
            <br /> 
            Answer:
            {/* Ternary check.  If there are any ans, mapping through each one of those. */}
            {answer ? answer.map((answer, idx) =><div><b>Answer {idx+1} - </b> {answer.text} ({Math.floor(answer.score*100)/100})</div>) : ""}
            <div>
              <button type="button" onClick={questionanswer} className="btn btn-outline-light text-dark">Submit</button>
            </div>
          </Fragment>
        }
      </header>
    </div>
  );
}

export default App