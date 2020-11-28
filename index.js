const inquirer = require('inquirer');
const fs = require('fs');
const questions = require("./questions");
inquirer.prompt(questions).then(function(data){
fs.appendFile('responses.txt',JSON.stringify(data), (err) => err ? console.error(err) : console.log("info saved"))
})