const inquirer = require('inquirer');
const fs = require('fs');
const questions = require("./questions");
let GitURL = `[github.com/ajsnow56](https://github.com/ajsnow56)`;
// const Apache = `[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
// const MIT = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
// const GPLv3 = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
// const LGPLv3 = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;

inquirer.prompt(questions).then(function(data){
    fs.appendFile('newreadme.md',
`# ${data.Title}
${data.License[0]}
### This License
${data.License[1]}
## Table of Contents

[Description](#Description) [Installation](#installation) [Usage](#Usage-Guidelines) [Test](#Test) [Contribution](#Contribution) [Questions](#Questions)

## Description:
    
${data.Description}
  ![](Assets/recording.gif)  
## Installation:
    
${data.Installation}
    
## Usage Guidelines:
    
${data.Usage}
    
## Test:
 
${data.Test}

## Contribution:
    
${data.Contributing}
    
## Questions:
*Follow me on Github at ${GitURL}

*Email me at: ${data.Email}`,
    
(err) => err ? console.error(err) : console.log("NewReadme Created!"))
});


