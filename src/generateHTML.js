
//GENERATE TEAM CARDS

//Manager Card
const generateManager = function (Manager) {
    return `
    <div class="column is-4">
    <div class="card">
        <div class="card-header">
            <p class="title is-4">${Manager.getName()}</p>
        </div>

        <div class="card-header">
            <p class="subtitle is-5"><i class="fa-solid fa-mug-hot"></i> ${Manager.getRole()}</p>
        </div>

        <div class="card-content">
            <ul>
                <li>ID: ${Manager.getId()}</li>
                <li>Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
                <li>Office Number: ${Manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    </div>
    `;
}

//Engineer Card
const generateEngineer = function (Engineer) {
    return `
    <div class="column is-4">
    <div class="card">
        <div class="card-header">
            <p class="title is-4">${Engineer.getName()}</p>
        </div>

        <div class="card-header">
            <p class="subtitle is-5"><i class="fa-solid fa-laptop-code"></i> ${Engineer.getRole()}</p>
        </div>

        <div class="card-content">
            <ul>
                <li>ID: ${Engineer.getId()}</li>
                <li>Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
                <li>GitHub: <a href="https://github.com/${Engineer.getGithub()}">${Engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
    </div>
    `
}

//Intern Card 
const generateIntern = function (Intern) {
    return `
    <div class="column is-4">
    <div class="card">
        <div class="card-header">
            <p class="title is-4">${Intern.getName()}</p>
        </div>

        <div class="card-header">
            <p class="subtitle is-5"><i class="fa-solid fa-graduation-cap"></i> ${Intern.getRole()}</p>
        </div>

        <div class="card-content">
            <ul>
                <li>ID: ${Intern.getId()}</li>
                <li>Email: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></li>
                <li>School: ${Intern.getSchool()}</li>
            </ul>
        </div>
    </div>
    </div>
    `
};

//Push array to generate page 
generateHTML = (data) => {

    //Card Array
    cardArray = []; 

    for (let i = 0; i < data.length; i++) {
        const Employee = data[i];
        const role = Employee.getRole(); 


        //Call generateManager Fucntion
        if (role === 'Manager') {
            const managerCard = generateManager(Employee);

            cardArray.push(managerCard);
        }

        //Call generateEngineer Function
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(Employee);

            cardArray.push(engineerCard);
        }

        //Call genrateIntern Function
        if (role === 'Intern') {
            const internCard = generateIntern(Employee);

           cardArray.push(internCard);
        }
        
    }

    //Join Strings
    const employeeCards = cardArray.join('')

    //Return to Team Page
    const generateTeam = generateCards(employeeCards); 
    return generateTeam;

}

// generate html page 
const generateCards = function (employeeCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css">

    <link rel="stylesheet" href="style.css">

    <title>Team Profile</title>
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  </html>
`;
}

//Export to Index
module.exports = generateHTML; 