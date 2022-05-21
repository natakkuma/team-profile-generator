//Import Employee Constructor
const Employee = require('./Employee');

//Extends Employee Constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {
        //Call Employee Constructor
        super (name, id, email);

        this.github = github; 
    }

    //Github
    getGithub () {
        return this.github;
    }
    
    //Convert Role to Engineer
    getRole () {
        return "Engineer";
    }
}

//Export
module.exports = Engineer; 