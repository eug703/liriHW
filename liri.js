require("dotenv").config();

var keys = require("./keys.js");
var spotify = new spotify(keys.spotify;)

var inquirer = require('inquirer');
var moment = require('moment');
var axios = require('axios');
var spotify = require('node-spotify-api');
var fs = require('fs');


inquirer
.prompt([
    {
        type: "input",
        message: "What's your name?",
        name: "username",
    },
    {
        type: "list"
        message: "What would you like to do?",
        choices: [
            'concert-this'
            'spotify-this-song'
            'movie=this'
            'do-what-it-says'
        ]
    }




])