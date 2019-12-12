const fs = require('fs')

const handleTopic = (req, res) => {
   fs.readFile('./database.json', "utf8", (err, content) => {
       let tempDatabase = []
       console.log(req.body)
        if (!err) {
           tempDatabase = JSON.parse(content)
        }
        tempDatabase.push(req.body)
        
        fs.writeFileSync('./database.json', JSON.stringify(tempDatabase), err => {     
            console.log(err)   
        })
    })
    res.status(200).json('success') 
}

module.exports = {
    handleTopic: handleTopic
}
         //If you can't do this, do the database part instead