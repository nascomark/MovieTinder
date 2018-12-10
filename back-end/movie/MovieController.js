const express = require('express');
const bodyParser = require('body-parser');

const Movie = require('../models/Movie');
const CrateMovieSchema = require('./createMovieSchema');
const MovieStatus = require('../models/MovieStatus');

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.route('/movie')
    .post((req, res) => {
        CrateMovieSchema.validate(req.body, {abortEarly: false})
            .then(validatedMovie => {
                Movie.create(validatedMovie, (err, movie) => {
                    if(err) res.status(500).send({ message: 'There was a problem crating movie.' })
                    res.status(200).send({ message: 'Movie created' });
                });
            })
            .catch(validationError => {
                const errorMessage = validationError.details.map( detail => detail.message);
                res.status(400).send({ message: errorMessage });
            })
        
    })
    .get((req, res) => {
        Movie.find((err, movies) => {
            if(err) res.status(500).send({ message: 'Error on the server' });
            if(!movies) res.status(404).send({ message: 'No movies found.' });
            res.status(200).json(movies);
        })
    })

router.route('/movie/status')
    .post((req, res) => {
        MovieStatus.create(req.body, (err, movieSatus) => {
            if(err) res.status(500).send({ message: 'There was a problem saving movie status.' })
                    res.status(200).send({ message: 'Movie status saved.' });
        })
    })

    .get((req, res) => {
        MovieStatus.find({status: 'Accepted'}, (err, moviesStatus) => {
            if(err) res.status(500).send({ message: 'Error on the server' });
            if(!moviesStatus) res.status(404).send({ message: 'No movies status found.' });
            res.status(200).json(moviesStatus);
        })
    })

module.exports = router;