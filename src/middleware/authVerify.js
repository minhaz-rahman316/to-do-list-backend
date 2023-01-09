var jwt = require('jsonwebtoken');


module.exports = (req, res, next)=>{
    let token = req.headers['token-key'];
    jwt.verify(token,MyKey908213087)
}