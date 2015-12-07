import express from 'express';

let app = express();
const PORT = 3000;

app.get('/test', (req, res) => {
    res.send('test');
})

let server = app.listen(PORT, function(){
    let host = server.address().address;
    let port = server.address().port;

    console.log('listening at http://%s:%s', host, port);
})