// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown');

// TODO: Create an array of questions for user input

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Type "Hello"',
        },
        {
            type: 'input',
            name: 'second',
            message: 'Type "World"',
        },
        {
            type: 'input',
            name: 'third',
            message: 'Type "!"',
            //choices: ['', '', ''] for type: 'checkbox' && 'list'
        },
    ])
    .then((answers) => {
        console.log(answers);
        writeToFile('readmeTest.md', answers);
    }

    )


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('readmeTest.md', generateMarkdown(data), (err) => {
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