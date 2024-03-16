const jwt = require("jsonwebtoken");

function auth(req, res, next){
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).send("Access denied. No token peovided");

    try{
        const decoded = jwt.verify(token, process.env.CPCMS_jwtPrivateKey);
        req.admin = decoded;
        next();
    } catch(ex){
        res.status(400).send("Invalid header");
    }
        

}

module.exports = auth;