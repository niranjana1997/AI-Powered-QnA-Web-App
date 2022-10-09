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


const App = () => {

  // Setting up states and references
  const refParagraph = useRef(null); 
  const refQuestion = useRef(null);
  const [answer, setAnswer] = useState(); 
  const [model, setModel] = useState(null); 
  const [hidden, setHidden] = useState(true);

  // Loading Tensorflow model
  const loadTFModel = async () => {
    const loadedTFModel = await qna.load();
    setModel(loadedTFModel); 
    console.log('Message: Tensorflow Model loaded');
  } 

  // Handling Questions
  const questionanswer = async (e) => {
    setHidden(false);
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
          <form className="formCSS">
            <label for="paragraph">Paragraph</label>
            <div className="input-group mb-3">
              <textarea type="text" ref={refParagraph} className="form-control" id="paragraph" name="para" rows="15" cols="60"/>
            </div>
            <label for="question">Question</label>
            <div className="input-group mb-3">
              <input type="text" ref={refQuestion} className="form-control" id="question" name="q"/>
            </div>
            <div>
              <button type="button" onClick={questionanswer} className="btn btn-outline-light text-dark">Submit</button>
            </div>
            {!hidden ? <p>Answer:</p> : null}
            <div className="answer">
            {/* Ternary check.  If there are any ans, mapping through each one of those. */}
            {answer ? answer.map((answer, idx) =><div><b>{idx+1}.</b> {answer.text} </div>) : ""}
            </div>
             
          </form>
        }
      </header>
    </div>
  );
}

export default App