const inquirer = require("inquirer");
const fs = require("fs");
const { renderFile } = require("./render");

const questions = [
  {
    name: "name",
    type: "input",
    message: "What is the title of the application?",
  },
  {
    name: "description",
    type: "input",
    message:
      "Provide a short description explaining the what, why, and how of this project.",
  },
  {
    name: "installation",
    type: "input",
    message: "Provide step-by-step instructions for installation.",
  },
  {
    name: "usage",
    type: "input",
    message: "Provide step-by-step instructions for usage.",
  },
  {
    name: "contribution",
    type: "input",
    message: "Provide contribution guidelines.",
  },
  {
    name: "test",
    type: "input",
    message: "Provide instructions on how to test the application.",
  },
  {
    name: "emailAddress",
    type: "input",
    message: "Provide your email address.",
  },
  {
    name: "gitRepo",
    type: "input",
    message: "Provide your github repo address.",
  },
  {
    name: "license",
    type: "list",
    message: "Select a license to use",
    choices: [
      "Apache 2.0",
      "BSD 3-Clause New or Revised license",
      "BSD 2-Clause Simplified or FreeBSD license",
      "GNU General Public License (GPL)",
      "GNU Library or Lesser General Public License (LGPL)",
      "MIT license",
      "Mozilla Public License 2.0",
      "Eclipse Public License version 1.0",
    ],
  },
  // {
  //   name: "sections",
  //   type: "checkbox",
  //   message: "Select additional contents.",
  //   choices: ["badges", "Features", "How to contribute", "Tests"],
  // },
];
inquirer.prompt(questions).then(
  ({
    name,
    description,
    installation,
    usage,
    contribution,
    test,
    gitRepo,
    emailAddress,
    license,
  }) => {
    const contents = renderFile(
      name,
      description,
      installation,
      usage,
      contribution,
      test,
      gitRepo,
      emailAddress,
      license
    );
    fs.writeFile("README.md", contents, (error) => {
      if (error) console.log(error);
    });
  },
  (error) => {
    console.log(error);
  }
);
