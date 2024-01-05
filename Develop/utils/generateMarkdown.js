// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice 
// is added to the section of the README entitled License that explains which license the application is covered under

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

//I'm currently having trouble generating the markdown if the user chooses not to include
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

  // markdown += 
  // `\n<a id="contributers"></a>
  // \n### Contributers

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

  // \n<a id="tests"></a>
  // \n### Tests\n`

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


//Areas of readme:

//DONE
// - Title of the project
  //Q: What is the project title?

//DONE
// - Description
  //Q: What is a description?
    //Can you break this down into more specific questions to get a better description from the user
    //What makes up a good description? This will be the questions you ask!

//DONE
// - Table of Contents
  //Not needed for question. This will be something I do in markdown with the topics already pre determined
  
//
// - Installation
  //Q: Does this need to be installed?
  //Q: IF SO (Put conditional statement. If data.installation === true). Describe the Installation process in steps

// - Usage
  //Q: How do you use this application?
    //Should I break this down into smaller steps? And when the user is done, they just enter a blank string and it will tell the program to go to the next section?

// - License
  //Q: What license are you using?
    //Apache License 2.0
    //GNU General Public License v3.0
    //MIT License
    //BSD 2-Clause "Simplified" License
    //BSD 3-Clause "New" or "Revised" License
    //Boost Software License 1.0
    //Creative Commons Zero v1.0 Universal
    //Eclipse Public License 2.0
    //GNU Affero General Public License v3.0
    //GNU General Public License v2.0
    //GNU Lesser General Public License v2.1
    //Mozilla Public License 2.0
    //The Unlicense

// - Contributing
  //Q: Did another user contribute to this project?
    //IF SO, who?
  //Q: Did you use a tutuorial for this project?
    //IF SO, who?
  //Q: Did you use ai for this project?
    //IF SO, who?

// - Tests
  //Q: What are tests that are included in your project for the user to see that it is running properly/to see clearly where there is an error

// - Questions
  //Q: What is your github username?
  //Q: What is your email address?