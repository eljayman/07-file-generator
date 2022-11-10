const inquirer = require("inquirer");
const fs = require("fs");
const { renderFile } = require("./render");

// function renderFile(name) {
//   return `#${name}`;
// }

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
  // {
  //   name: "sections",
  //   type: "checkbox",
  //   message: "Select additional contents.",
  //   choices: ["badges", "Features", "How to contribute", "Tests"],
  // },
];
inquirer.prompt(questions).then(
  ({ name, description, installation, usage, contribution, test }) => {
    const contents = renderFile(
      name,
      description,
      installation,
      usage,
      contribution,
      test
    );
    // console.log("answers :>>", answers);
    fs.writeFile("README.md", contents, (error) => {
      if (error) console.log(error);
    });
  },
  (error) => {
    console.log(error);
  }
);
