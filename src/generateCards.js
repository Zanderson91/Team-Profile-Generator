function generateManager(manager) {
  return `
  <div class = "card text-white bg-dark style = "width: 20rem ">
  <div class = "card-header mt-3 mb-3">Name: ${manager.name}</div>
  <ul class = "list-group list-group-flush" >
    <li class = "list-group-item m-2" >ID: ${manager.id} </li>
    <li class = "list-group-item m-2">Email: <a href = "mailto:${manager.email}" > ${manager.email}</a></li >
    <li class = "list-group-item m-2"> Office: ${manager.officeNumber} </li> </ul> 
    </div>`
};

function generateEngineer(engineer) {
  return `
  <div class = "card text-white bg-dark style = "width: 20rem ">
  <div class = "card-header mt-3 mb-3">Name: ${engineer.name}</div>
  <ul class = "list-group list-group-flush" >
    <li class = "list-group-item m-2" >ID: ${engineer.id} </li>
    <li class = "list-group-item m-2">Email: <a href = "mailto:${engineer.email}" > ${engineer.email}</a></li >
    <li class = "list-group-item m-2">Github: ${engineer.github} </li> </ul> 
    </div>`
};

function generateIntern(intern) {
  return `
  <div class = "card text-white bg-dark style = "width: 20rem ">
  <div class = "card-header mt-3 mb-3">Name: ${intern.name}</div>
  <ul class = "list-group list-group-flush" >
    <li class = "list-group-item m-2" >ID: ${intern.id} </li>
    <li class = "list-group-item m-2">Email: <a href = "mailto:${intern.email}" > ${intern.email}</a></li >
    <li class = "list-group-item m-2"> School: ${intern.school} </li> </ul> 
    </div>`
};

