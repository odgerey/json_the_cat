const request = require('request');

const fs = require('fs');
const myArg = process.argv.slice(2);
request(`https://api.thecatapi.com/v1/breeds/search?q=${myArg[0]}`,(error, response, body) =>  {

    const result = JSON.parse(body);
    if (result[0] === undefined){
      console.log("This is an error")
    }else if (error) {
        console.log(error)
    }else {
      console.log(result[0].description)
    }
  })

// The myArgs array is (what I'm writing on the command line ) what I'm sending to my request
// The array of objects I get back is what is the query being returned to me 
//Thus, to access the results or data return, I need to access the keys of the object that I specifically want
//The object is in an array, thus result[0].description. 






