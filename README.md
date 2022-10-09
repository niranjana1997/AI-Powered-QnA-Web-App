# AI Powered QnA Web App

## Description
An AI powered Question & Answer web app created using Tensorflow.JS Bidirectional Encoder Representations from Transformers (BERT) and ReactJS.
This application uses a pre-trained BERT model to build a BERT-powered question-and-answer web application. When a passage and a question is passed as an input, the model finds answers from the passage. ReactJS is used to create user interface.

## How to install and run the project?
Three packages are installed:
1. @tensorflow/tfjs: To install the tensorflow.js library
2. @tensorflow-models/qna: To download the BERT-powered question-answering model
3. react-loader-spinner: To use the initial loading interface while the BERT-powered model is being loaded. 
4. bootstrap: CSS Framework

They can be installed using the command:
npm i @tensorflow/tfjs @tensorflow-models/qna react-loader-spinner bootstrap

React App can be run using the command: npm start

## Outputs
1. Test Case 1:
Paragraph: The Apollo Program — “The Apollo program, also known as Project Apollo, was the third United States human spaceflight program carried out by the National Aeronautics and Space Administration (NASA), which accomplished landing the first humans on the Moon from 1969 to 1972. First conceived during Dwight D. Eisenhower’s administration as a three-man spacecraft to follow the one-man Project Mercury which put the first Americans in space, Apollo was later dedicated to President John F. Kennedy’s national goal of landing a man on the Moon and returning him safely to the Earth by the end of the 1960s, which he proposed in a May 25, 1961, address to Congress. Project Mercury was followed by the two-man Project Gemini. The first manned flight of Apollo was in 1968. Apollo ran from 1961 to 1972, and was supported by the two-man Gemini program which ran concurrently with it from 1962 to 1966. Gemini missions developed some of the space travel techniques that were necessary for the success of the Apollo missions. Apollo used Saturn family rockets as launch vehicles. Apollo/Saturn vehicles were also used for an Apollo Applications Program, which consisted of Skylab, a space station that supported three manned missions in 1973–74, and the Apollo-Soyuz Test Project, a joint Earth orbit mission with the Soviet Union in 1975.”
Question: 
Which project put the first Americans into space?

What year did the first manned Apollo flight occur?
Who did the U.S. collaborate with on an Earth orbit mission in 1975?
What is Apollo?
How long did Project Apollo run?
