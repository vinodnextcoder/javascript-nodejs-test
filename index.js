var express = require("express");
var app = express();
var aasyncWaterFile = require('./aasyncWaterFallExample');
var aasyncRaceCtrl= require('./aasyncRacexample');
app.get("/", (req, res, next) => {
  let user = { userList: ["vinod pawar", "Nitin Pawar", "Rauhl Pawar"] };
  res.json(user);

});
app.get("/asyncwaterExample", aasyncWaterFile.asyncwaterExample)
app.get("/asyncparallelExample", aasyncWaterFile.asyncparallelExample);
app.get("/asyncRaceExample", aasyncRaceCtrl.asyncRaceExample);




app.listen(3000, () => {
  console.log("Server running on port 3000");
});

