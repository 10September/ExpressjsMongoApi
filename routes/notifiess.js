const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Notifies = require('../models/Notifies.js');

router.get('/', (req, res, next) => {
    Notifies.find((err, notifiess) => {
        if (err) return next(err);
        res.json(notifiess);
    })
})
router.post('/', (req, res, next) => {
    Notifies.create(req.body, (err, post) => {
        if (err) return next(err);
        res.json(post);
    })
})

module.exports = router;