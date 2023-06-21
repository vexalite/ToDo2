const jwt = require("jsonwebtoken");
const SECRET_KEY = "SOMETHING";

const auth = (req, res, next)=>{

    try {
        console.log("---auth--- ",  req.headers.authorization )
    if(!req.headers.authorization || req.headers.authorization === "null"  ) {
        return res.status(200)
        // .json({ 
        //     redirect: true
        // })
        next()
    }

       
        } catch (error) {
        console.log(error);
        res.status(401).json({message: "Unauthorized User"});
    }

}

module.exports = auth;