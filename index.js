
// TODO: Include packages needed for this application
    const fs = require('fs');
    const inquirer = require('inquirer');
    const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: user_input => {
            if (user_input) {
                return true;
            } else {
                console.log ('Please enter a title to continue!');
                return false;
            }
        },
        type: 'input',
        name: 'description',
        message: 'Provide a description for your project.',
        validate: user_description => {
            if (user_description) {
                return true;
            } else {
                console.log ('Please enter your description to continue!');
                return false;
            }
        },
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions:',
        validate: user_installation => {
            if (user_installation) {
                return true;
            } else {
                console.log ('Please enter installation instructions to continue!');
                return false;
            }
        },
        type: 'input',
        name: 'usage',
        message: 'Provide usage instructions:',
        validate: user_usage => {
            if (user_usage) {
                return true;
            } else {
                console.log ('Please enter usage instructions to continue!');
                return false;
            }
        },
        type: 'input',
        name: 'credits',
        message: 'Provide credits (if applicable):',
        validate: user_credits => {
            if (user_credits) {
                return true;
            } else {
                console.log ('Please enter credits to continue!');
                return false;
            }
        },
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license:',
        choices: ["MIT", "Creative Commons", "Apache", "GNU","none of the above"],
        validate: user_license => {
            if (user_license) {
                return true;
            } else {
                console.log ('select a license for your project');
                return false;
            }
        },
        type: 'input',
        name: 'contribution',
        message: 'How can users contribute to this project?',
        validate: user_contribution => {
            if (user_contribution) {
                return true;
            } else {
                console.log ('Provide information on how to contribute to your project ');
                return false;
            }
        },
        type: 'input',
        name: 'tests',
        message: 'How does the user test this project?',
        validate: user_test => {
            if (user_test) {
                return true;
            } else {
                console.log ('provide information on how to test your project.');
                return false;
            }
        },
        type: 'input',
        name: 'Github',
        message: 'Enter your Github username:',
        validate: user_github => {
            if (user_github) {
                return true;
            } else {
                console.log ('Please enter your Github username');
                return false;
            }
        },
        type: 'input',
        name: 'email',
        message: 'Enter your Email:',
        validate: user_email => {
            if (user_email) {
                return true;
            } else {
                console.log ('please enter your email');
                return false;
            }
        }


    },

    
];

// TODO: Create a function to write README file


// TODO: Create a function to initialize app


// Function call to initialize app
init();
