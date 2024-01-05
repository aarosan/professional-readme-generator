// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown');

// TODO: Create an array of questions for user input

inquirer
    .prompt([
    
        //Title of the project
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
        },
        
        //Description Questions
        {
            type: 'input',
            name: 'why',
            message: 'Why did you create this project?',
        },
        {
            type: 'input',
            name: 'what',
            message: 'What does this project do?',
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What languages did you use?',
            choices: [' HTML', ' CSS', ' JavaScript', ' Node', ' SQL', 'Other'],
        },
        {
            //added when statement to give user more flexibility
            //asked the ai if there was a way to incorporate conditional statements
            //in the inquirer prompt
            type: 'input',
            name: 'specificLanguage',
            message: 'Enter another programming language:',
            when: (answers) => {
                return answers.languages.includes('Other');
            },
        },
        
        //Installation Questions
        {
            type: 'confirm',
            name: 'confirmInstallation',
            message: 'Would you like to include installation instructions?',
            defaul: true,
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your program?',
            when: (answers) => 
                answers.confirmInstallation === true,
        },

        //Usage Questions
        {
            type: 'confirm',
            name: 'confirmUsage',
            message: 'Would you like to include usage instructions?',
            defaul: true,
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use your program?',
            when: (answers) => 
                answers.confirmUsage === true,
        },

        //License Questions
        {
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Would you like to include a license?',
            defaul: true,
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license would you like to use?',
            choices: 
            [
                'Apache License 2.0',
                'GNU General Public License v3.0',
                'MIT License',
                'BSD 2-Clause "Simplified" License',
                'BSD 3-Clause "New" or "Revised" License',
                'Boost Software License 1.0',
                'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License 2.0',
                'GNU Affero General Public License v3.0',
                'GNU General Public License v2.0',
                'GNU Lesser General Public License v2.1',
                'Mozilla Public License 2.0',
                'The Unlicense',
            ],
            when: (answers) => 
                answers.confirmLicense === true,
        },

        //Contributing Questions
        {
            type: 'confirm',
            name: 'confirmContributers',
            message: 'Would you like to include a contribution section?',
            defaul: true,
        },
        {
            type: 'confirm',
            name: 'confirmUser',
            message: 'Would you like to include (a) GitHub user(s) as contributors?',
            defaul: true,
        },
        {
            type: 'input',
            name: 'user',
            message: 'Please type the GitHub username(s) of who you would like to add as a contributor. List multiple as a string.',
            when: (answers) => 
                answers.confirmUser === true,
        },
        {
            type: 'confirm',
            name: 'confirmTutorial',
            message: 'Would you like to include (an) online tutorial(s) as contributors?',
            defaul: true,
        },
        {
            type: 'input',
            name: 'tutorial',
            message: 'Please type the URL of the tutorial, followed by the author. List multiple as a string',
        },
        {
            type: 'confirm',
            name: 'confirmAi',
            message: 'Would you like to include (an) AI program(s) as contributors?',
            defaul: true,
        },
        {
            type: 'input',
            name: 'ai',
            message: 'Please type the name of the AI program. List multiple as a string',
        },
        //Tests Questions

        //Questions Questions
        {
            type: 'confirm',
            name: 'confirmQuestions',
            message: 'Would you like to include a questions section?',
            defaul: true,
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please type your email address',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please type your GitHub username',
        },
    ])
    .then((answers) => {
        console.log(answers);
        //this was from Node Day 2 lecture
        //Naming the file with the users answers
        const filename = `${answers.title.toLowerCase().split(' ').join('')}README.md`;
        writeToFile(filename, answers);
    }

    )


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) {
            console.error('Error creating the file:', err);
            return;
        }
        console.log('File created successfully.');
    });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



//JAN 2

//THE NEXT STEP IS TO WORK ON THE GENERATE MARKDOWN. IT LOOKS LIKE THE INQUIRE PROMPT IS WORKING, AND ONCE THE ANSWERS ARE 
//PRINTED TO THE CONSOLE, THEN THE WRITETOFILE FUNCTION IS CALLED. THE FIRST ERROR I GET IN THE TERMINAL IS IN THE GENERATE 
//MARKDOWN FILE, AND IT ONLY GETS CALLED IN THE WRITETOFILE FUNCTION. SO THIS MEANS THAT I NEED TO GET THE TEMPLATE GOING FOR IT
//TO CREATE A FILE. I SHOULD BE ABLE TO CREATE A TEST FILE WITH A TXT EDIT TO TEST IF THE FILE IS CREATING. YOU HAVE TO USE
//JSON.STRINGIFY THOUGH IF YOU WANT IT TO ACTUALLY CREATE. FROM THERE, YOU NEED TO GET THE QUESTIONS FILLED OUT FOR A README

//QUESTIONS FOR TOMORROW:
//DO I NEED TO DEFINE DATA IN THE .THEN STATEMENT?