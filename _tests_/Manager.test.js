//CONST
const Manager = require('../lib/Manager');

//Get Office Number
test('create manager office number', () => {
    const manager = new Manager('Natakkuma', 12345, 'natakkuma@kumacodes.com', 9);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

//Get Role
test('get manager role', () => {
    const manager = new Manager ('Natakkuma', 12345, 'natakkuma@kumacodes.com', 9);

    expect(manager.getRole()).toEqual('Manager');
}); 