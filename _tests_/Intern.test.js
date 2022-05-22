//CONST
const Intern = require('../lib/Intern');

//Create Intern Object
test('create Intern object', () => {
    const intern = new Intern('Natakkuma', 12345, 'natakkuma@kumacodes.com', 'UCR');
    
    expect(intern.school) .toEqual(expect.any(String));
});

//Get School
test('get intern school', () => {
    const intern = new Intern('Natakkuma', 12345, 'natakkuma@kumacodes.com', 'UCR');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});


//Get Role
test('get intern role', () => {
    const intern = new Intern('Natakkuma', 12345, 'natakkuma@kumacodes.com', 'UCR');

    expect(intern.getRole()).toEqual("Intern");
}); 