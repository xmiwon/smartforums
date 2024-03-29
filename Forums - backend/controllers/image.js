const Clarifai = require('clarifai')

const app = new Clarifai.App({
    apiKey: 'a63acc979bb04e19a31318685e622a49'
  })

//Clarifai API
const handleApiCall = (req, res) => {
    app.models
     .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
     .then(data => {res.json(data)})         
     .catch(err => res.status(400).json('Unable to work with API'))
}

// /image
const handleImage = (req, res, db) => {
    const { id } = req.body
    db('users').where('id', '=', id)
        .increment('entries', 1)
        .returning('entries')
        .then(entries => {res.json(entries[0])})        
        .catch(err => res.status(400).json('Unable to get entries'))
}

module.exports = {
    handleImage: handleImage,
    handleApiCall: handleApiCall
}