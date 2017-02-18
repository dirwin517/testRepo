/**
 * Created by daniel.irwin on 1/31/17.
 */
module.exports = (function(){

    var http = require('http');

    var data = {};

    var server = http.createServer(function(req, res){

        res.statusCode =  200;
        res.setHeader('Content-Type', 'application/json');

        res.write(JSON.stringify(data[req.url]?data[req.url]: Object.keys(data), null ,3));
        res.end();
    });


    function setData(newData){
        data = JSON.parse(JSON.stringify(newData));
    }

    function listen(port){
        console.log('Im going to listen on ', port);
        server.listen(port);
    }

    function stop(){
        server.close();
    }

    return {
        setData : setData,
        listen : listen,
        stop : stop
    };

})();
