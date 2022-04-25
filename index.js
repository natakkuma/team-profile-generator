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

//