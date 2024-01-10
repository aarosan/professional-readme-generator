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


function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache License 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GNU General Public License v3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'BSD 2-Clause "Simplified" License':
      return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
    case 'BSD 3-Clause "New" or "Revised" License':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'Boost Software License 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    case 'Creative Commons Zero v1.0 Universal':
      return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
    case 'GNU Affero General Public License v3.0':
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
    case 'GNU General Public License v2.0':
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
    case 'Mozilla Public License 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    case 'The Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache License 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GNU General Public License v3.0':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'MIT License':
      return 'https://opensource.org/licenses/MIT';
    case 'BSD 2-Clause "Simplified" License':
      return 'https://opensource.org/licenses/BSD-2-Clause';
    case 'BSD 3-Clause "New" or "Revised" License':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    case 'Boost Software License 1.0':
      return 'https://www.boost.org/LICENSE_1_0.txt';
    case 'Creative Commons Zero v1.0 Universal':
      return 'http://creativecommons.org/publicdomain/zero/1.0/';
    case 'GNU Affero General Public License v3.0':
      return 'https://www.gnu.org/licenses/agpl-3.0';
    case 'GNU General Public License v2.0':
      return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
    case 'Mozilla Public License 2.0':
      return 'https://opensource.org/licenses/MPL-2.0';
    case 'The Unlicense':
      return 'http://unlicense.org/';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'Apache License 2.0':
      return 'This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).';
    case 'GNU General Public License v3.0':
      return 'This project is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0).';
    case 'MIT License':
      return 'This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).';
    case 'BSD 2-Clause "Simplified" License':
      return 'This project is licensed under the [BSD 2-Clause "Simplified" License](https://opensource.org/licenses/BSD-2-Clause).';
    case 'BSD 3-Clause "New" or "Revised" License':
      return 'This project is licensed under the [BSD 3-Clause "New" or "Revised" License](https://opensource.org/licenses/BSD-3-Clause).';
    case 'Boost Software License 1.0':
      return 'This project is licensed under the [Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt).';
    case 'Creative Commons Zero v1.0 Universal':
      return 'This project is licensed under the [Creative Commons Zero v1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/).';
    case 'GNU Affero General Public License v3.0':
      return 'This project is licensed under the [GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0).';
    case 'GNU General Public License v2.0':
      return 'This project is licensed under the [GNU General Public License v2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html).';
    case 'Mozilla Public License 2.0':
      return 'This project is licensed under the [Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0).';
    case 'The Unlicense':
      return 'This project is licensed under the [The Unlicense](http://unlicense.org/).';
    default:
      return '';
  }
}



//I was having trouble generating the markdown if the user chose not to include certain information. I chose to handle this by adding conditional statements for each section that they could input so that there could be more flexibility in the material generated. This way, the user can create the readme if they still didn't have some of the information needed yet.

function generateMarkdown(data) {
  //defining in a larger scope so that I can use throughout the markdown 
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  let markdown = '';

  if(data.title) {
    markdown += `# ${data.title}`;
  }

  if(data.license) {
    markdown += ` ${licenseBadge}\n`
  }
  
  if(data.why || data.what || data.languages || data.specificLanguage) {
    markdown += `\n## Description\n\n`;
  }
  

  if (data.why) {
    markdown += `I created this project ${data.why}.\n`;
  }
  if (data.what) {
    markdown += `This project ${data.what}.\n`;
  }
  if (data.languages && data.languages.length > 0) {
    markdown += `In this project, I used the following coding languages: ${data.languages.join(', ')}.\n`;
  }

  if(data.specificLanguage) {
    markdown += `${data.specificLanguage}`;
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
    \n### License ${licenseBadge}
    \n${licenseSection}(${licenseLink})\n`;
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
    \n### Questions`;
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