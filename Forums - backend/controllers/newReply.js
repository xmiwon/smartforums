const handleReply = (req, res, db) => {
    const { email, reply_message, name, topic_id } = req.body
    if (!reply_message || !email) {
        return res.status(400).json('Incorrect form submission')
    }
    console.log(email,'fromserver')
    db.select('email').from('users').where('email', '=', email)     
        .then(data => {
            if (data[0].email === email) {
                db.transaction(trx => {
                trx.insert({
                    reply_message: reply_message,
                    topic_id: topic_id,
                    name: name,
                    email: email,
                    date: new Date()
                })
                .into('replies')
                .then(trx.commit)
                .catch(trx.rollback)
                })
                res.status(200).json('success')
            }
        })
        .catch(err => res.status(400).json('Invalid user not allowed to post'))

    db('users').where('email', '=', email)
        .increment('entries', 1)
        .returning('entries')
        .then(entries => {res.json(entries[0])})
}


module.exports = {
    handleReply: handleReply
}

