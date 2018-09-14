import express from 'express'
import session from 'express-session'
import axios from 'axios'

const app = express()

app.use(session({
    secret: 'test',
    resave: true,
    saveUninitialized: true
}))

const auth = function(req, res, next) {
    if (req.session && req.session.user === "test" && req.session.admin)
      return next()
    else
      return res.sendStatus(401)
}

app.get('/login', function(req, res){
    if (!req.query.username) {
        res.send('login failed');    
    } else if(req.query.username === "test") {
        req.session.user = 'test';
        req.session.admin = true;
        res.send("login success!");
    }
})

app.get('/test', function(req, res){
    axios.post('http://11301-health-run-run-frontproxy.test.za.net/run/proxy/getAccessToken', {
        userId: '100005510',
        version: '2'
      })
      .then(function (response) {
        return res.json(response.data)
      })
      .catch(function (error) {
        console.log(error)
      });
    
})

app.get('/content', auth, function(req, res){
    res.send("hello,wrold")
})

app.listen(8000)