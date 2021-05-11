// Import fs module
const inquirer = require('inquirer');
const fs = require ('fs');


const generateReadme = (answers) => {
  `# ${projectName}

  ## Table of Contents
  - [Application Description] (#application)
  - [Features](#features)
  - [Future features](#future)
  - [Installation] (#installation)

  ## Application Description
  
  This application... ${appDescription}.

  My motivation in the development of this application was ${motivation}.

  I built this project because ${why}.

  The application solves ${problems}.

  ## Features

  What makes this project stand out is ${featuresList}.

  # Mock up Image of the application

  ```bash
  ${appPic}
  ```
  ## Challenges

  While creating this application, some _challenges_ aroused: ${challenges}.
  These challenges were resolved by ${challengeSolution}.

  Some of the lessons learned during the building process were ${lessonsLearned}.

  ## Future Features

  In the future, the application will include ${futureDev}.


  ## Instructions for Installation

  ${installInst}

  ## Reporting issues

  ${reportInst}

  ## Contributions

  Contributions can be made by ${contributions}.

  ## Links to GitHub Repo & Application

  ```md
  ![GitHub Repo Link](${gitHubLink})
  ![Link to Application] (${appLink})
  ```
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  `


  var inquirer = require('inquirer');
  inquirer
    .prompt([
      /* Pass your questions in here */
    ])
    .then(answers => {
      // Use user feedback for... whatever!!
    })
    .catch(error => {
      if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
  }