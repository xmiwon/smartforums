const handleTopic = (req, res, db) => {
    const { email, title_message, text_message } = req.body
    if (!title_message || !text_message) {
        return res.status(400).json('Incorrect form submission')
    }

    db.select('email').from('users')
        .where('email', '=', email)
    db.transaction(trx => {
        trx.insert({
            title_message: title_message,
            text_message: text_message,
            email: email,
            date: new Date()
        })
        .into('texting')
        .then(trx.commit)       
        .catch(trx.rollback)
    
    })
    res.status(200).json('success')
    .catch(err => res.status(400).json('Unable to post'))
}

//Get the email from state in App.js, make it sent over to the server somehow so it knows who the sender is and uses it to compare in the database to see who it really is and insert the new message to there

module.exports = {
    handleTopic: handleTopic
}