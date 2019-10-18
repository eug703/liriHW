var axios = require('axios');

function test(){
    axios.get("https://rest.bandsintown.com/artists/killers/events?app_id=codingbootcamp").then(function(response){

    console.log(response);
})
// .catch(function(err){
//     console.log(err)
// });

}

test();

