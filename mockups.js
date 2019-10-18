 if(process.argv[2] === "concert-this"){
     axios get


 }


var userinput = process.argv[2]
var lookingfor = process.argv.slice(3).join("")

switch(userinput){
    case "concert-this":
        concertThis();
        break;

    case "spotify-this-song":
        spotifyThisSong();
        break;

    case "movie-this":
        movieThis();
        break;

    case "do-what-it-says":
        doWhatItSays();
        break;
    
    default:
        console.log("Please use a recognized command");
}

concertThis(){
    axios.get("https://rest.bandsintown.com/artists/" + lookingfor + "/events?app_id=codingbootcamp").then(function(response));
    
};

spotifyThisSong(){
};

movieThis(){   
};

doWhatItSays(){
};