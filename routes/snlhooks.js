const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Snlhook = require('../models/SNLhook.js');

router.get('/', (req, res, next) => {
    Snlhook.find((err, snlhooks) => {
        if (err) return next(err);
        res.json(snlhooks);
    })
})
router.get('/:transactionId', (req, res, next) => {
    Snlhook.findOne({transactionId:req.params.transactionId}, (err, post) => {
        if (err) return next(err);
        res.json(post);
    })
})
router.post('/', (req, res, next) => {
    Snlhook.create(req.body, (err, post) => {
        if (err) return next(err);
        res.json(post);
    })
})

module.exports = router;