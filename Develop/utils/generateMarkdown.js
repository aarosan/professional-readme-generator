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
function generateMarkdown(data) {
  return `
  # ${data.name}

  ## Description

  ${data.why}.
  ${data.what}.
  In this project, I used the following coding languages: ${data.languages}.

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributers](#contributers)
  - [Tests](#tests)
  - [Questions](#questions)


  <a id="installation"></a>
  ### Installation

  <a id="usage"></a>
  ### Usage

  <a id="license"></a>
  ### License

  <a id="contributers"></a>
  ### Contributers

  <a id="tests"></a>
  ### Tests

  <a id="questions"></a>
  ### Questions
`;
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

// - Title of the project
  //Q: What is the project title?

// - Description
  //Q: What is a description?
    //Can you break this down into more specific questions to get a better description from the user
    //What makes up a good description? This will be the questions you ask!

// - Table of Contents
  //Not needed for question. This will be something I do in markdown with the topics already pre determined
  
// - Installation
  //Q: Does this need to be installed?
  //Q: IF SO (Put conditional statement. If data.installation === true). Describe the Installation process

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