const D = require("./src/page-template");
const { Engineer } = require("./lib/Engineer");
const { Intern } = require("./lib/Intern");
const { Manager } = require("./lib/Manager");

const inquirer = require("inquirer");

const memberData = [];

function Select() {
    inquirer
      .prompt([
        {
          type: "rawlist",
          name: "menu",
          message: "Please Select Employee Type",
          choices: ["Engineer", "Intern", "Exit"],
        },
      ])
      .then((answers) => {
        switch (answers.menu) {
          case "Engineer":
            InputEngineer();
            break;
          case "Intern":
            InputIntern();
            break;
          case "Exit":
            D.saveAsHtml(memberData);
            break;
        }
      });
  }

  function InputEngineer() {
    inquirer
      .prompt([
        {
          name: "name",
          message: "Please Input Engineer Name",
        },
        {
          name: "ID",
          message: "Please Input Engineer ID",
        },
        {
          name: "email",
          message: "Please Input Engineer Email Address",
        },
        {
          name: "github",
          message: "Please Input Engineer Github Username",
        },
      ])
      .then((engineer) => {
        const engineerMember = new Engineer(
          engineer.name,
          engineer.ID,
          engineer.email,
          engineer.github
        );
        memberData.push(engineerMember);
        Select();
      });
  }

  function InputManager() {
    inquirer
      .prompt([
        {
          name: "name",
          message: "Please Input Manager Name",
        },
        {
          name: "ID",
          message: "Please Input Manager ID",
        },
        {
          name: "email",
          message: "Please Input Manager Email Address",
        },
        {
          name: "office_number",
          message: "Please Input Manager Office Number",
        },
      ])
      .then((manager) => {
        const managerMember = new Manager(
          manager.name,
          manager.ID,
          manager.email,
          manager.office_number
        );
        memberData.push(managerMember);
        Select();
      });
  }

  function InputIntern() {
    inquirer
      .prompt([
        {
          name: "name",
          message: "Please Input Intern Name",
        },
        {
          name: "ID",
          message: "Please Input Intern ID",
        },
        {
          name: "email",
          message: "Please Input Intern Email Address",
        },
        {
          name: "school",
          message: "Please Input Intern School",
        },
      ])
      .then((intern) => {
        const internMember = new Intern(
          intern.name,
          intern.ID,
          intern.email,
          intern.school
        );
        memberData.push(internMember);
        Select();
      });
  }
  
  InputManager();
  