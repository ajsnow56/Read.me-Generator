const inquirer = require('inquirer');
const fs = require('fs');
const questions = require("./questions");
let GitURL = `[github.com/ajsnow56](https://github.com/ajsnow56)`
// let license =['Public-CC0', 'Permissive', 'LGPL', 'GPL']

inquirer.prompt(questions).then(function(data){
    fs.appendFile('readme.md',
`# ${data.Title}
${data.License}
## Table of Contents

[Description](#Description), 
[Installation](#installation),   
[Usage](#Usage),
[Contributing](#Contributing),
[Tests](#Tests),
[Questions](#Questions)

## Description:
    
${data.Description}
    
## Installation:
    
${data.Installation}
    
## Usage Information:
    
${data.Usage}
    
## Contribution Guidelines:
    
${data.Contributing}
    
## Test instructions:
    
${data.Tests}
    
## Questions:
${GitURL}
${data.Email}`,
    
(err) => err ? console.error(err) : console.log("info saved"))
});
