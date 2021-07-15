const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const inquirer = require("inquirer");

const mangerquestions = () => {
  inquirer //general prompt
    .prompt([
      {
        type: "input",
        message: "What is your user name?",
        name: "username",
      },
      {
        type: "input",
        message: "What is your id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email?:",
        name: "email",
      },
      {
        type: "input",
        message: "What is your user office Number?",
        name: "officeNum",
      },
    ])
    .then((response) => (response.confirm === response.password ? console.log("Success!") : console.log("You forgot your password already?!")));
};

const internQuestions = () => {
  inquirer //general prompt
    .prompt([
      {
        type: "input",
        message: "What is your user name?",
        name: "username",
      },
      {
        type: "input",
        message: "What is your id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email?:",
        name: "email",
      },
      {
        type: "input",
        message: "What is your user school?",
        name: "school",
      },
    ])
    .then((response) => (response.confirm === response.password ? console.log("Success!") : console.log("You forgot your password already?!")));
};
//general employee questions, manager questions, enginer questions, intern questions
//init() run general and mangager questions
//then if you run the intern you get general and intern quetion ()

//init() run manager

//const something manger = new Manager(responce.name, id, email, officeNum) taken from inquirer
// team.push to html template function
