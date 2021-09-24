const { application } = require('express');
var express = require('express');
var posts = express.Router();

const logger = require('../middleswares/logger');

posts.use(logger);
// posts.use(validator);

const getList = (req, res) => {
    res.send('inside posts')
}

posts.get('/', getList);

module.exports = posts;
