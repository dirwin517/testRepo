/**
 * Created by daniel.irwin on 1/31/17.
 */

var server = require('./mock-server');

server.listen(1337);

server.setData({
    '/ping' : {
        "message" : "pong"
    },
    '/measures' : {
        summary : {
            cost : {
                usd : 500000
            }
        },
        measures : [
            {
                id : '123',
                label : 'I am measure 123'
            }
        ]
    },
    '/measures/123' : {
        id : '123',
        label : 'I am measure 123'
    },
    '/buildings' : [
        {
            label : 'the 321 building',
            id : '321'
        },
        {
            label : 'the 503 building',
            id : '503'
        }
    ],
    '/user/details' : {
        profile : {
            firstname : 'Dan',
            lastname : 'Irwin',
            zipcode : 14618
        }
    }
});

setTimeout(function(){
    server.stop();
}, 6000000);
