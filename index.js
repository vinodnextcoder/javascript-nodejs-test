var express = require("express");
var app = express();

app.get("/url", (req, res, next) => {
  let user = { userList: ["vinod pawar", "Nitin Pawar", "Rauhl Pawar"] };
  res.json(user);

});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});