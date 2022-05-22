//Import Employee Constructor
const Employee = require('./Employee');

//Extends Employee Constructor
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        //Call Employee Constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    //Office Number
    getOfficeNumber() {
        return this.officeNumber;
    }
    
    //Convert Role to Manager
    getRole () {
        return "Manager";
    }
}

//Export
module.exports = Manager; 