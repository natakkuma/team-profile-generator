//CONSTANTS

    //Link to Node Modules
    const fs = require('fs'); 
    const inquirer = require('inquirer');

    //Link to Generate HTML - an HTML file is generated that displays a nicely formatted team roster based on user input
    const generateHTML = require('./src/generateHTML');

    //Link to Employee Profiles - Team Manager, Engineer, Intern
    const Manager = require('./lib/Manager');
    const Engineer = require('./lib/Engineer');
    const Intern = require('./lib/Intern');

//ARRAY
const teamArray = [];

//INPUT PROMPTS

//Manager Prompt
const addManager = () => {
    inquirer.prompt([
        {
            //Name
            type: 'input',
            name: 'name',
            message: 'Enter name of team manager.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter team manager\'s name.');
                    return false;
                }
            }
        },
        {   
            //id
            type: 'input',
            name: 'id',
            message: 'Enter team manager\'s ID.',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter team manager\'s ID.');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {   
            //email
            type: 'input',
            name: 'email',
            message: 'Enter team manager\'s email.',
            validate: email => {
                valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
                if (valid) {
                    return true;
                } else {
                    console.log('Please enter a valid email address.');
                    return false;
                }
            }
        },
        {   
            //phone number
            type: 'input',
            name: 'officeNumber',
            message: 'Enter team manager\'s office number.',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter an office number.');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {   
            //add a team member
            type: 'list',
            name: 'addTeam',
            message: 'Would you like to add a team member?',
            choices: ['Engineer', 'Intern', 'No']
        }
    ])
    .then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamArr.push(manager);
        switch(answers.addTeam) {
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            default:
                writeToFile('./dist/index.html', generateHTML(teamArr))
        }
    })
}

//Engineer Prompt

//Intern Prompt