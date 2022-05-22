//CONST
const Employee = require('../lib/Employee');

//Create Employee Object
test('create an employee object', () => {
    const employee = new Employee('Natakkuma', 12345, 'natakkuma@kumacodes.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//Get Name
test('get employee name', () => {
    const employee = new Employee('Natakkuma', 12345, 'natakkuma@kumacodes.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

//Get ID 
test('get employee ID', () => {
    const employee = new Employee('Natakkuma', 12345, 'natakkuma@kumacodes.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

//Get Email
test('get employee email', () => {
    const employee = new Employee('Natakkuma', 12345, 'natakkuma@kumacodes.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

//Get Role
test('get role of employee', () => {
    const employee = new Employee('Natakkuma', 12345, 'natakkuma@kumacodes.com');

    expect(employee.getRole()).toEqual('Employee');
}); 