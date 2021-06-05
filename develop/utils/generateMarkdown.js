// a. Function that returns the license link and leaves an empty string if none is selected

function renderLicenseLink(license) {
  if (license == 'NONE'){
    return license = '';
  
  } else {
      renderLicenseSection();
  }
}

// b. Function to render license based on user selection, if no license, it returns an empty string
function renderLicenseSection(license) {
  // title with license section (give license section or nothing)
  console.log(license);
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
      badge = `No license provided`;
  }
  return badge;
};

// c. Function to generate markdown for README
function generateMarkdown(data) {
  let license = renderLicenseSection(data.license)
  return ` ${license}

  # ${data.projectName}

  ## Description
  
  This application ${data.appDescription}.

  The application includes the following features ${data.features}.

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

  The usage of this application: ${data.usage}

  The following image or video will provide with an example of the usage.

  \`\`\`bash
  ${data.appPic}
  \`\`\`

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
