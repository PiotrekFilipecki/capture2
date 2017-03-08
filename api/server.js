var fs = require('fs');
var io = require('socket.io')();
io.on('connection', function(client)
{
    client.on('startStream', function() {
        console.log("startStream");
        setTimeout(nextFragment, 1000, {socket : client, partCounter : 0 });
    });

});

function nextFragment(client) {
    console.log('nextFragment', client.partCounter);

    var url ='./data/';
    if      (client.partCounter == 0)   url += "day_base.bin";
    else if (client.partCounter == 159) 
    {
         client.socket.emit('lastChunk');
        return;
    }
    else {
        var pc = client.partCounter - 1;
        var sc = ((pc < 10) ? '0' : '') + ((pc < 100) ? '0' : '') + pc;
        url += "day" + "_0"+sc+".bin";
        console.log(url);
    }
    client.partCounter++;

    var bytes = fs.readFileSync(url);
    client.socket.emit('movieChunk', bytes);

    setTimeout(nextFragment, 1000, client);
}


io.listen(3000);
