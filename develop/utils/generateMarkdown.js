// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// function renderLicenseBadge(license) {
//   let license = ``![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)``;



// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'NONE'){
    return license = '';
  
  } else {
      renderLicenseSection();
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // title with license section (give license section or nothing)
  const mit = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  const apache = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  const gpl = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  const bsd = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  let badge;

  if (license == "MIT") {
    badge = mit;
  } else if (license == "APACHE 2.0") {
      badge = apache;
  } else if (license == "GPL 3.0") {
      badge = gpl;
  } else if (license == "BSD 3") {
      badge = bsd;     
  } else if(license == "None") {
      badge = `no license provided`;
  }
  return badge;
};




// Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = renderLicenseSection(data.license)
  return ` #${license}

  # ${data.projectName}

  ## Description
  
  This application ${data.appDescription}.

  The motivation behind the development of this application was ${data.motivation}.

  The application solves ${data.solves}, and what makes this project stand out are the following features ${data.features}.

  Additional features that may be incorporated in the future: ${data.future}.
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ### Installation

  You can install this application by ${data.install}.
 
  ### Usage

  This application works by ${data.usage}

  The following image or video will provide with an example of the usage.

  \`\`\`bash
  ${data.appPic}
  \`\`\`

  While creating this application, some _challenges_ aroused: ${data.challenges}.
  These challenges were resolved by ${data.challengeSolution}.
  Some of the lessons learned during the building process were ${data.lessonsLearned}.

  ### License
  The license for this project is ${license}.

  ## Contributing

  Contributions can be made by ${data.contributions}.

  ## Tests

  Tests included: ${data.tests}.

  ## Questions
  If you have any questions or would like to report any issues, please contact:
  \`\`\`md
  ![eMail address](${data.email})  
  ![GitHub Repo Link](${data.gitHubLink})
  ![Link to Application] (${data.appLink})
  \`\`\`
  `
}

module.exports = generateMarkdown;
