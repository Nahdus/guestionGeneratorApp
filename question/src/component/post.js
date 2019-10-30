

//---------------------------------------------------------------------------------------------------

var request = require('request');

// // Set the headers
// var headers = {
//     'User-Agent':       'Super Agent/0.0.1',
//     'Content-Type':     'application/x-www-form-urlencoded'
// }

// Configure the request
// var options = {
//     url: 'http://smartairlinesdbconnect.us-east-1.elasticbeanstalk.com/TotalRecords',
//     method: 'POST',
    
    
// }

// Start the request

const sendRequest=(url,body,method="POST")=>{
    
    var options = {
        url: url,
        method: method,
        json: true,
        body: body
        }
        if (method==="GET"){
            delete options.body
        }   
        console.log(options)
        
        
    return new Promise((resolve,reject)=>{

        request(options,function (error, response, body) {
            
            if (!error && response.statusCode === 200) {
                
                // Print out the response body
                //console.log('body'+body)
                resolve(body)
            }
            else if (error||response.statusCode !== 200){
                //debugger;
                console.log("something went wrong")
                console.log('error '+error)
                console.log('response '+response)
                reject(error)
                
                
            }
        })
    })
}

export default sendRequest








