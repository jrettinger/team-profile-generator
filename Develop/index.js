const D = require("./src/renderHtml");
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