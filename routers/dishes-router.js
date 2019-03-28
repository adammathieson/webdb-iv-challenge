const router = require('express').Router();

const db = require('../data/dbConfig.js');

router.get('/', (req, res) => {
    db('dishes')
        .then(dishes => {
            res.status(200).json(dishes);
        })
        .catch(err => {
            res.status(500).json(err)
        });
});

module.exports = router;