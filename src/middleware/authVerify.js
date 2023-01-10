var jwt = require('jsonwebtoken');


module.exports = (req, res, next)=>{
    let token = req.headers['token-key'];
    jwt.verify(token, "MyKey908213087", (error, decoded) => {
        if(error) {
            res.status(401).json({ status: "Unauthorized" })
        } else {
            // username through token
            let username = decoded['data']['UserName'];
            req.headers.username= username
            next()
        }
    })
}