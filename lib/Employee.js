
class Employee {
    //Constructor
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //Return name from input
    getName() {
        return this.name;
    }

    //Return ID from input
    getId () {
        return this.id;
    }

    //Return email from input
    getEmail () {
        return this.email;
    }

    //Return employee role from input
    getRole() {
        return "Employee";
    }
}

//Export
module.exports = Employee;