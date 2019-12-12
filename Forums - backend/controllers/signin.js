const fs = require('fs')

const handleSignin = (req, res, db, bcrypt) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json('Incorrect form submission')
    }
    db.select('email', 'hash').from('login')
        .where('email', '=', email)
        .then(data => {
           const isValid = bcrypt.compareSync(password, data[0].hash)
           if (isValid) {
              return db.select('*').from('users')
                .where('email', '=', email)
                .then(user => {
                    res.json(user[0])
                    console.log(`\n"${email}" successfully logged in to the server:\n(${Date()}`)
                    fs.appendFile('Log.txt', `\n"${email}" successfully logged in to the server:\n(${Date()}) \n ----------------------------------------`, err => {
                        if (err) {
                            console.log(err)
                        }
                    })
                })      
                .catch(err => res.status(400).json('Unable to get user'))      
           } else {
               res.status(400).json('Wrong credentials')
               
               fs.appendFile('Log.txt', `\nWRONG ATTEMPT: 
                Email: ${req.body.email} 
                Password: ${req.body.password}\n (${new Date()})\n---------------------------------------- `, err => {
                    if (err) {
                        console.log(err)
                    }
                }) 
                }  
        })
        .catch(err => res.status(400).json('Wrong credentials'))
    }

    module.exports = {
        handleSignin: handleSignin
    }