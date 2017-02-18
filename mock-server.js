/**
 * Created by daniel.irwin on 1/31/17.
 */
module.exports = (function(){

    var http = require('http');

    var data = {};

    var server = http.createServer(function(req, res){
        //
        // console.log('req', {
        //     url : req.url,
        //     body : req.body,
        //     req: req
        // });

        var body = [];
        req.on('data', function(chunk) {
            body.push(chunk);
        }).on('end', function() {
            body = body.join('');
            // at this point, `body` has the entire request body stored in it as a string
            try{
                console.log('', JSON.parse(body));
            }
            catch(e){
                console.log('e.stack', e.stack);
                console.log('body', body);
            }

        });

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
