module.exports = function(app) {
  const neighbourhoods = require("../controller/neighbourhoods.controller");

  // Retrieve selected neighbourhoods

  app.get("/api/neighbourhoods/:districtId", neighbourhoods.findAll);

  app.get("/api/neighbourhood/:id", neighbourhoods.findByPk);

  app.post("/api/addmarker/:id", neighbourhoods.markerUpdate);
};
