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
        teamArray.push(manager);
        switch(answers.addTeam) {
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            default:
                generateFile('./dist/index.html', generateHTML(teamArr))
        }
    })
}

//Engineer Prompt
const addEngineer = () => {
    inquirer.prompt([
        {   
            //name
            type: 'input',
            name: 'name',
            message: 'Enter the engineer\'s name.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the engineer\'s name.');
                    return false;
                }
            }
        },
        {   
            //id
            type: 'input',
            name: 'id',
            message: 'Enter the engineer\'s ID.',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter the engineer\'s ID.');
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
            message: 'Enter the engineer\'s email.',
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
            //github
            type: 'input',
            name: 'github',
            message: 'Enter the engineer\'s GitHub username.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the engineer\'s GitHub username.');
                    return false;
                }
            }
        },
        {   
            //add team member
            type: 'list',
            name: 'addTeam',
            message: 'Would you like to add another team member?',
            choices: ['Engineer', 'Intern', 'No']
        }
    ])
    .then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamArray.push(engineer);
        switch(answers.addTeam) {
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            default:
                generateFile('./dist/index.html', generateHTML(teamArr))
        }
    })
}

//Intern Prompt
const addIntern = () => {
    inquirer.prompt([
        {   
            //name
            type: 'input',
            name: 'name',
            message: 'Enter the intern\'s name.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the intern\'s name.');
                    return false;
                }
            }
        },
        {   
            //id
            type: 'input',
            name: 'id',
            message: 'Enter the intern\'s ID.',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter the intern\'s ID.');
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
            message: 'Enter the intern\'s email?',
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
            //school
            type: 'input',
            name: 'school',
            message: 'Enter the intern\'s school.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the intern\'s school.');
                    return false;
                }
            }
        },
        {   
            //add team member
            type: 'list',
            name: 'addTeam',
            message: 'Would you like to add another team member?',
            choices: ['Engineer', 'Intern', 'No']
        }
    ])
    .then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamArray.push(intern);
        switch(answers.addTeam) {
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            default:
                generateFile('./dist/index.html', generateHTML(teamArr))
        }
    })
}

//Run App
addManager();

//generateFile function - generates HTML file using fs
function generateFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log(' The team profile has been created. Please see the dist folder for the generated HTML file.');
    });
};