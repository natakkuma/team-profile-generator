//CONST
const Engineer = require('../lib/Engineer');

//Create Engineer Object
test('create an Engineer object', () => {
    const engineer = new Engineer('Natakkuma', 12345, 'natakkuma@kumacodes.com', 'natakkuma');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

//Get Github
test('get engineer github', () => {
    const engineer = new Engineer('Natakkuma', 12345, 'natakkuma@kumacodes.com', 'natakkuma');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});


//Get Role
test('get engineer role', () => {
    const engineer = new Engineer('Natakkuma', 12345, 'natakkuma@kumacodes.com', 'natakkuma');

    expect(engineer.getRole()).toEqual('Engineer');
}); 