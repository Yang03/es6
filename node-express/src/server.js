import express from 'express'
import session from 'express-session'

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

app.get('/content', auth, function(req, res){
    res.send("hello,wrold")
})

app.listen(8000)