//Import Employee Constructor
const Employee = require('./Employee');

//Extends Employee Constructor
class Intern extends Employee  {
    constructor (name, id, email, school) {
        //Call Employee Constructor
        super (name, id, email); 

        this.school = school; 
    }

    //School
    getSchool () {
        return this.school;
    }
    
    //Convert Role to Intern
    getRole () {
        return "Intern";
    }
}

//Export
module.exports = Intern; 