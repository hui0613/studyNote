const https = require('http');

https.get('http://m.kugou.com/plist/list/2923772?json=true',(resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data',(chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end',() => {
        console.log('data')
        console.log(data)
    });

}).on("error",(err) => {
    console.log("Error: " + err.message);
});