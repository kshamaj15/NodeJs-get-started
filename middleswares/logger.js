const logger = (req, res, next) => {
    console.log('logger');
    next();
}

// const validator = (req, res, next) => {
//     console.log('validator');
//     next();
// }

module.exports = logger;