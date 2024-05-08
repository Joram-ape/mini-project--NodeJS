const express = require("express");
const router = express.Router();

const treasuresController = require("../controllers/treasuresController");

router.get("/findDistance", (req, res) => {
 treasuresController.treasureFindDistance(req.body).then((result) => res.send(result));
});

router.get("/priceValue", (req, res) => {
    treasuresController.treasurePrizeValue(req.body).then((result) => res.send(result));
});

module.exports = router;
