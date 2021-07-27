function generateManager(manager) {
  return `
              <div class="row justify-content-center">
                <div class="col-sm-2">
  <div class = "card text-white bg-dark style = "width: 20rem ">
  <div class = "card-header mt-3 mb-3">Name: ${manager.name.role}</div>
  <ul class = "list-group list-group-flush" >
    <li class = "list-group-item m-2" >ID: ${manager.id} </li>
    <li class = "list-group-item m-2">Email: <a href = "mailto:${manager.email}" > ${manager.email}</a></li >
    <li class = "list-group-item m-2"> Office: ${manager.officeNumber} </li> </ul> 
    </div>
    </div>`
};

function generateEngineer(engineer) {
  return `
                <div class="col-sm-2">
  <div class = "card text-white bg-dark style = "width: 20rem ">
  <div class = "card-header mt-3 mb-3">Name: ${engineer.name}</div>
  <ul class = "list-group list-group-flush" >
    <li class = "list-group-item m-2" >ID: ${engineer.id} </li>
    <li class = "list-group-item m-2">Email: <a href = "mailto:${engineer.email}" > ${engineer.email}</a></li >
    <li class = "list-group-item m-2">Github: ${engineer.github} </li> </ul> 
    </div>
    </div>`
};

function generateIntern(intern) {
  return `

                <div class="col-sm-2">
  <div class = "card text-white bg-dark style = "width: 20rem ">
  <div class = "card-header mt-3 mb-3">Name: ${intern.name}</div>
  <ul class = "list-group list-group-flush" >
    <li class = "list-group-item m-2" >ID: ${intern.id} </li>
    <li class = "list-group-item m-2">Email: <a href = "mailto:${intern.email}" > ${intern.email}</a></li >
    <li class = "list-group-item m-2"> School: ${intern.school} </li> </ul> 
    </div>
    </div>
    </div>`
};

(generateCards = (data) => {
  pageArray = [];

  for (var i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();
    if (role === "Manager") {
      const managerCard = generateManager(employee);
      pageArray.push(managerCard);
    }
    if (role === "Engineer") {
      const engineerCard = generateEngineer(employee);
      pageArray.push(engineerCard);
    }
    if (role === "Intern") {
      const internCard = generateIntern(employee);
      pageArray.push(internCard);
    }
  }
  const employeeCards = pageArray.join(" ");
  const generateTeam = generateTeamPage(employeeCards);
  return generateTeam;
})

//function that will generate the main html template
function generateTeamPage(employeeCards) {
  return `<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
            crossorigin="anonymous" />
        <link rel="stylesheet" href="./style.css" />
        <title>Team Profile Generator</title>
    </head>

    <body>

        <header>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid d-flex justify-content-center">
                    <span class="navbar-brand m-5 h1">My Team</span>
                </div>
            </nav>
        </header>
        <br>
        <br>

        <main>
${employeeCards}
        </main>
        <script src="../index.js"></script>
    </body>

</html>
`;
}

module.exports = generateCards;