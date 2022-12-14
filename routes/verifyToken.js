const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    res.status(401).json("you are not authorized");
  }
};
const verifyTokenAndAuthorization = (req,res,next)=>{
verifyToken(req,res,()=>{
if(req.user.id === req.params.id || req.user.isAdmin){

next()
}else{
res.status(403).json("you'r not allowed to do that")}
})
}
module.exports = { verifyToken,verifyTokenAndAuthorization };
