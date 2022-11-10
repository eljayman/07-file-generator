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
];
inquirer.prompt(questions).then(({ name }) => {
  const contents = renderFile(name);
  console.log("contents :>>", contents);
  fs.writeFile("README.md", contents, (error) => {
    if (error) console.log(error);
  });
});
