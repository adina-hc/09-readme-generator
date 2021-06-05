// 1. Import fs module and inquirer
const inquirer = require('inquirer');
const fs = require ('fs');

// 2. Function to generate the README content with the answers provided by the user
const generateMarkdown = require("./utils/generateMarkdown")

// 3. Array of questions for user to input answers
const answers = [
    // Set of questions and instructions to populate the README document
  {
    type: 'input',
    message: 'What is the name of the project?',
    name: 'projectName',
    // Validate input from user to ensure answer is provided
    validate: (value) => {
      if (value) {
        return true;
      }
      else {
        return 'You need to provide a project name';
      }
    }
  },
  {
    type: 'input',
    message: 'Add a description of the project',
    name: 'appDescription',
    // Validate entry
    validate: (value) => {
      if (value) {
        return true;
      }
      else{
        return 'You need to provide a description';
      }
    }
  },
  {
    type: 'input',
    message: 'What are the features?',
    name: 'features',
    // Validate entry
    validate: (value) => {
      if (value) {
        return true;
      }
      else{
        return 'You need to provide the features';
      }
    }
  },
  {
    type: 'input',
    message: 'What new features will you add in the future?',
    name: 'future',
    // Validate entry
    validate: (value) => {
      if (value) {
        return true;
      }
      else{
        return 'You need to provide future features';
      }
    }
  },
  {
    type: 'input',
    message: 'You can install this application by:',
    name: 'install',
    // Validate entry
    validate: (value) => {
      if (value) {
        return true;
      }
      else{
        return 'You need to provide a guide to install your application';
      }
    }
  },
  {
    type: 'input',
    message: 'Describe the usage:',
    name: 'usage',
    // Validate entry
    validate: (value) => {
      if (value) {
        return true;
      }
      else{
        return 'You need to describe the usage';
      }
    }
  },
  {
    type: 'input', //what type to place if it is an uploaded image?
    message: 'Add a mock up image or picture of your application',
    name: 'appPic',
    // Validate entry
    validate: (value) => {
      if (value) {
        return true;
      }
      else{
        return 'You need to include an image of your app';
      }
    }
  },
  {
    type: 'input',
    message: 'What lessons did you learn?',
    name: 'lessonsLearned',
    // Validate entry
    validate: (value) => {
      if (value) {
        return true;
      }
      else{
        return 'Please include your lessons learned in the development of your application';
      }
    }
  },

  {  //How to make it visible or invisible depending on if a license is picked or null?
    type: 'list',
    message: 'Choose a license for your project',
    name: 'license',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],

    // Validate entry
    validate: (value) => {
      if (value) {
        return true;
      }
      else{
        return 'You need to choose a license';
      }
    }
  },      
  {  
    type: 'input',
    message: 'What features will be added in the future?',
    name: 'features',
    // Validate entry
    validate: (value) => {
      if (value) {
        return true;
      }
      else{
        return 'You need to include the features';
      }
    }
  }, 
  {
    type: 'input',
    message: 'What are the guidelines to contribute?',
    name: 'contributions',
    validate: (value) => {
      if (value) {
        return true;
      }
      else {
        return 'You need to provide guidelines to contribute to the project';
      }
    }
  },
  {
    type: 'input',
    message: 'What tests are you including?',
    name: 'tests',
    // Validate entry
    validate: (value) => {
      if (value) {
        return true;
      }
      else{
        return 'Please describe tests included';
      }
    }
  },
  {
    type: 'input',
    message: 'Provide your email address for the purpose of contact',
    name: 'email',
    // Validate entry
    validate: (value) => {
      if (value) {
        return true;
      }
      else{
        return 'Please provide email address';
      }
    }
  },       {
    type: 'input',
    message: 'Please provide gitHub link',
    name: 'gitHubLink',
    // Validate entry
    validate: (value) => {
      if (value) {
        return true;
      }
      else{
        return 'Please provide gitHub Link';
      }
    }
  },       {
    type: 'input',
    message: 'Provide application link',
    name: 'appLink',
    // Validate entry
    validate: (value) => {
      if (value) {
        return true;
      }
      else{
        return 'Please include app Link';
      }
    }
  },        
];

// Function to write the README file, in a new folder so it does not override the README for this project.
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err)=> 
    err ? console.error(err): console.log('Success'));
};

// Function to initialize the readme generator app
function init() {
  inquirer.prompt(answers)
  .then (function (data){
    writeToFile("New-README.md", data);
    console.log(data);
  })
}

// Function call to initialize readme generator app
init();