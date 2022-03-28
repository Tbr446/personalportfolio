const { Router } = require("express");
const email = require("../models/Email");
const router = Router();

// Create record in MongoDB
router.post("/", (request, response) => {
  const newEmail = new email.model(request.body);
  newEmail.save((error, record) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(record);
  });
});




module.exports = router;