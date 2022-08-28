const router = require("express").Router();

router.get("/usertest", (req, res) => {
  res.send("user test is successfull");
});

router.post("/userpost", (req, res) => {
  const user = req.body.username;
  console.log(user);
});

module.exports = router;
