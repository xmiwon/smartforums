const express = require('express')
const bcrypt = require('bcrypt-nodejs')
const cors = require('cors')
const databaseFile = require('./database.json')


// const databaseFile = require('./database.js')
// const database = databaseFile.databaseJS

//package for connecting to database for nodejs
const knex = require('knex')

//controllers
const register = require('./controllers/register')
const signin = require('./controllers/signin')
const profile = require('./controllers/profile')
const image = require('./controllers/image')
const postTopic = require('./controllers/postTopic')
const newTopic = require('./controllers/newTopic')
const newReply = require('./controllers/newReply')

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '123',
        database: 'smartdb'
    }
})

const today = new Date();
const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const dateTime = date + ' ' + time;

db.select('*').from('users').then(data => {
    console.log(data, 'From server.js')
});

const app = express()
app.use(express.json())
app.use(cors())




//Fetching data based on the route of the page
app.get('/home', (req, res) => {
    db.select('*').from('texting').then(data => {
        console.log(data, 'From server.js TEXTING')
        res.send(data)
    });
})
app.get('/post', (req, res) => {
    db.select('*').from('replies').then(data => {
        console.log(data, 'From server.js REPLIES')
        res.send(data)
    });
})
app.get('/users', (req, res) => {
    db.select('*').from('users').then(data => {
        res.send(data)
    })
})
app.get('/timeline', (req, res) => {
    db.select('*').from('timeline').then(data => {
        res.send(data)
    })
})

app.get('/community-pages', (req, res) => {
    db.select('*').from('community').then(data => res.send(data))
})

app.get('/community-topics', (req, res) => {
    db.select('*').from('community_page').then(data=> res.send(data))
})



app.post('/post-status', (req, res) => newStatus.handleStatus(req, res, db))

app.post('/create-topic', (req, res) => newTopic.handleTopic(req, res, db, dateTime))

app.post('/post-reply', (req, res) => newReply.handleReply(req, res, db))

app.post('/signin', (req, res) => signin.handleSignin(req, res, db, bcrypt))

app.post('/register', (req, res) => register.handleRegister(req, res, db, bcrypt))

app.get('/profile/:id', (req, res) => profile.handleProfileGet(req, res, db))

app.put('/image', (req, res) => image.handleImage(req, res, db))
app.post('/imageurl', (req, res) => image.handleApiCall(req, res))







app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

/*
/ --> res = this is working
/signin route --> POST = success/fail
/register --> POST = user
/profile/:userID --> GET = user
/image --> PUT --> user
 */