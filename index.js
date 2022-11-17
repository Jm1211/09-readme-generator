
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
        
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a brief description about what your project does:',
        
     },
     {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions:',
        
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage instructions:',
        
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Provide credits (if applicable):',
        
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license:',
        choices: ["MIT", "GPL v3", "Apache", "Boost"],
        
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can users contribute to this project?',
        
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How does the user test this project?',
       
    },
    {
        type: 'input',
        name: 'Github',
        message: 'Enter your Github username:',
        
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your Email:',
       


    },

    
];

// TODO: Create a function to write README file
function writeToFile(filename,data){
    fs.writeFile(filename,data, (err) => {
        err ? console.error(err) : console.log("You have successfully created a README!")
    });

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(
        ({
          title,
          description,
          installation,
          usage,
          credits,
          license,
          contributions,
          tests,
          github,
          email,
        }) => {
          const markDown = generateMarkdown(
            title,
            description,
            installation,
            usage,
            credits,
            license,
            contributions,
            tests,
            github,
            email
          );
  
          writeToFile("README.md", markDown);
        }
      );
  }
        

// Function call to initialize app
init();
