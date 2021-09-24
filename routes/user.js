var express = require('express');
var user = express.Router();


const getList = (req, res) => {
    res.send('successful')
}

user.get('/', getList);

module.exports = user;
