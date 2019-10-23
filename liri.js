require("dotenv").config();

var keys = require("./keys.js");

var inquirer = require('inquirer');
var moment = require('moment');
var axios = require('axios');
var spotifyAPI = require('node-spotify-api');
var fs = require('fs');

var spotify = new spotifyAPI(keys.spotify);

var userCommand = process.argv[2]
var userInput = process.argv.slice(3).join(" ");

function liriStart(userCommand, userInput){
        switch(userCommand){
            case "concert-this":
                concertThis(userInput);
                break;

            case "spotify-this-song":
                spotifyThisSong(userInput);
                break;

            case "movie-this":
                movieThis(userInput);
                break;

            case "do-what-it-says":
                doWhatItSays(userInput);
                break;
            
            default:
                console.log("Please use one of the recognized four commands: concert-this, spotify-this-song, movie-this, or do-what-it-says");
        }
}

liriStart(userCommand, userInput);

function concertThis(userInput){
    axios.get("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp").then(function(response){

        if(response.data.length !== 0){
            for(i=0; i < response.data.length; i++){
                var date = moment(response.data[i].datetime).format('MM/DD/YYY')
                console.log(`Artist: ${userInput}`)
                console.log(`Venue: ${response.data[i].venue.name}`)
                console.log(`City: ${response.data[i].venue.city}`)
                console.log(`Date: ${date}`)
            }
          }else{
            console.log(`Unable to find concert information for ${userInput}`)
        }
    })
}

// 

function spotifyThisSong(userInput){
    if(userInput === "")
    userInput= "The Sign Ace of Base"
    spotify.search({type: 'track', query: userInput, limit: 1})
    
    .then(function(response){
    for(i = 0; i < response.tracks.items.length; i++){
    }
    })
        spotify
        .search({type: 'track', query: userInput, limit: 5})
        .then(function(response){
        if(response.tracks.items.length !== 0){
        for( i = 0; i < response.tracks.items.length; i++){
            console.log("\n===============================================")
            console.log(`Song: ${response.tracks.items[i].name}`);
            console.log(`Artist: ${response.tracks.items[i].album.artists[0].name}`);
            console.log(`Album: ${response.tracks.items[i].album.name}`);
            console.log(`Spotify Preview: ${response.tracks.items[i].album.external_urls.spotify}`);

            console.log("\n===============================================")
        }
    }else{
        console.log(`Unable to find song information for ${userInput}`)
    }
    })
 }
 
function movieThis(userInput){
    if(userInput === ""){
        userInput = "Mr. Nobody"
        axios.get("http://www.omdbapi.com/?t="+ userInput +"&y=&plot=short&apikey=47aab339").then(function(response){
    });
    }
    var queryURL = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=47aab339";
    axios.get(queryURL).then(function(response){
        console.log(response)
    if(response.data.Response !== 'False'){
        console.log('\n==========================================================================')
        console.log(`Title: ${response.data.Title}`);
        console.log(`Year: ${response.data.Year}`)
        console.log(`IMDB Rating: ${response.data.imdbRating}`);
        console.log(`Rotten Tomatoes Rating: ${response.data.Ratings[0].Value}`);
        console.log(`Country: ${response.data.Country}`);
        console.log(`Language: ${response.data.Language}`);
        console.log(`Plot: ${response.data.Plot}`);
        console.log(`Actors: ${response.data.Actors}`);
    }else{
        console.log(`Unable to find movie information for ${userInput}`)
    }
    })
 }

function doWhatItSays(){
}
