const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
{    
    name: 'placeholder',
    type: 
}
  ])
  .then((answers) => {
console.log('answers ==>', answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
    throw error;
    } else {
    console.log('something else went wrong');
    }
  });