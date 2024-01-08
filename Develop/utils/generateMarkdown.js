// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba (License Link Info)

//License Links
  // 'Apache License 2.0',
    //[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  //BLUE

  // 'GNU General Public License v3.0',
    //[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
  //BLUE

  // 'MIT License',
    //[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  //YELLOW

  // 'BSD 2-Clause "Simplified" License',
    //[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)
  //CLAUSE ORANGE

  // 'BSD 3-Clause "New" or "Revised" License',
    //[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
  //CLAUSE BLUE

  // 'Boost Software License 1.0',
    //[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
  //LIGHTBLUE

  // 'Creative Commons Zero v1.0 Universal',
    //[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)
  //LIGHTGREY

  // 'GNU Affero General Public License v3.0',
    //[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
  //BLUE

  // 'GNU General Public License v2.0',
    //[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
  //BLUE

  // 'Mozilla Public License 2.0',
    //[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
  //BRIGHTGREEN

  // 'The Unlicense',
    //[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
  //BLUE


function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}



//I was having trouble generating the markdown if the user chooses not to include
//some of the information. I'm going to rewrite this to be conditional statements, 
//so that the program will still create a file if the user doesn't know certain things yet
function generateMarkdown(data) {

  let markdown = `# ${data.title}\n\n## Description\n\n`;

  if (data.why) {
    markdown += `I created this project ${data.why}.\n`;
  }
  if (data.what) {
    markdown += `This project ${data.what}.\n`;
  }
  if (data.languages && data.languages.length > 0) {
    markdown += `In this project, I used the following coding languages: ${data.languages.join(', ')}.\n`;
  }

  markdown += 
  `\n## Table of Contents\n

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributers](#contributers)
  - [Tests](#tests)
  - [Questions](#questions)\n`

  if (data.confirmInstallation && data.installation) {
    markdown += 
    `\n<a id="installation"></a>
    \n### Installation
    \n${data.installation}\n`;
  }

  if (data.confirmUsage && data.usage) {
    markdown += 
    `\n<a id="usage"></a>
    \n### Usage
    \n${data.usage}\n`;
  }

  if (data.confirmLicense && data.license) {
    markdown += 
    `\n<a id="license"></a>
    \n### License
    \n${data.license}\n`;
  }

  if (data.confirmContributers && data.user || data.tutorial || data.ai) {
    markdown += 
    `\n<a id="contributers"></a>
    \n### Contributers\n`;
  }
 
  if (data.confirmUser && data.user) {
    markdown +=
    `\nThe following GitHub user(s) contributed: ${data.user}`;
  }

  if (data.confirmTutorial && data.tutorial) {
    markdown +=
    `\nThe following tutorial(s) were used during the coding process: ${data.tutorial} `;
  }

  if (data.confirmAi && data.ai) {
    markdown +=
    `\nThe following AI program(s) were used during the coding process: ${data.ai}\n`;
  }

  if (data.confirmTests && data.test) {
    markdown += 
    `\n\n<a id="tests"></a>
    \n### Tests\n
    \n${data.test}\n`;
  }

  if (data.confirmQuestions && data.email || data.github) {
    markdown +=
    `\n<a id="questions"></a>
    \n### Questions\n`;
  }

  if (data.email) {
    markdown += `
    \nIf you have any questions about this application, you can reach me at ${data.email}.\n`;
  }

  if (data.github) {
    markdown += `You can find me on GitHub using my username, ${data.github}.`
  }

  return markdown;

}

module.exports = generateMarkdown;

// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README



// - Tests
  //Q: What are tests that are included in your project for the user to see that it is running properly/to see clearly where there is an error

