const { verifyTokenAndAuthorization } = require("./verifyToken");


const router = require("express").Router();

router.put("/:id", verifyTokenAndAuthorization, (req,res)=>{

})


module.exports = router;
