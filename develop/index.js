// 1. Import fs module and inquirer
const inquirer = require('inquirer');
const fs = require ('fs');

// 2. Function to generate the README content with the answers provided by the user
const generateReadme = (answers) => {
  `# ${projectName}

  ## Description
  
  This application ${appDescription}.

  The motivation behind the development of this application was ${motivation}.

  The application solves ${solves}, and what makes this project stand out are the following features ${features}.

  Additional features that may be incorporated in the future: ${future}.
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ### Installation

  You can install this application by ${install}.
 
  ### Usage

  This application works by ${usage}

  The following image or video will provide with an example of the usage.

  \`\`\`bash
  ${appPic}
  \`\`\`

  While creating this application, some _challenges_ aroused: ${challenges}.
  These challenges were resolved by ${challengeSolution}.
  Some of the lessons learned during the building process were ${lessonsLearned}.

  ### License
  The license for this project is ${license}.

  ## Contributing

  Contributions can be made by ${contributions}.

  ## Tests

  Tests included: ${tests}.

  ## Questions
  If you have any questions or would like to report any issues, please contact:
  \`\`\`md
  ![eMail address](${email})  
  ![GitHub Repo Link](${gitHubLink})
  ![Link to Application] (${appLink})
  \`\`\`
  `;

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
        message: 'What was your motivation for developing this project?',
        name: 'motivation',
        // Validate entry
        validate: (value) => {
          if (value) {
            return true;
          }
          else{
            return 'Please provide your motivation';
          }
        }
      },
      {
        type: 'input',
        message: 'What does the application or project solve?',
        name: 'solves',
        // Validate entry
        validate: (value) => {
          if (value) {
            return true;
          }
          else{
            return 'You need to provide a solution or added value of the project';
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
        message: 'How do you install the application?',
        name: 'installation',
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
        message: 'What challenges did you face during the development of your application?:',
        name: 'challenges',
        // Validate entry
        validate: (value) => {
          if (value) {
            return true;
          }
          else{
            return 'Please add challenges';
          }
        }
      },
      {
        type: 'input',
        message: 'How did you work around or solutions to your challenges?',
        name: 'challengeSolution',
        // Validate entry
        validate: (value) => {
          if (value) {
            return true;
          }
          else{
            return 'Please describe how you overcame the challenges';
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
}


// Function to write the README file, in a new folder so it does not override the README for this project.
function writeToFile(fileName, data) {
  fs.writeFile('./new/'+'New-README.md', generateReadme, (err)=> 
    err ? console.error(err): console.log('Success'));
};

// Function to initialize the readme generator app
function init() {
  inquirer.prompt(questions)
  .then (function (data){
    writeToFile("New-README.md", generateMarkdown(data));
    console.log(data);
  })
}

// Function call to initialize readme generator app
init();