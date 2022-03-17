const jwt = require('jsonwebtoken');
const config = require('@config');

const isAuth = (req,res,next) => {
  const token = req.cookies.token;
  if(!token){
   return res.status(401).send("Access Denied");
  }
  try {
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.clearCookie("token");
    return res.status(400).send(error.message);
  }
}


module.exports = isAuth;