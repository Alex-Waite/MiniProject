const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

inquirer
    .prompt({
        message: "Enter your name",
        name: "username"
    })
    .then(function ({
        username
    }) {
        fs
            .writeFileSync(`<!DOCTYPE html>
            <html lang="en-us">
            
            <head>
            
            </head>
            
            
            <body>
            ${username}
            
            </body>
            
            
            </html>`, "index.html")
    })