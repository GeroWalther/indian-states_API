const express = require("express");
const router = express.Router();
const { getAllDistricts, getDistricts } = require("../database/districts");

router.get("/", async (req, res) => {
  const districts = await getAllDistricts();
  res.send({ status: "OK", data: districts });
});

router.get("/:byId", async (req, res) => {
  try {
    const district = await getDistricts(req.params.byId);
    if (!district) {
      res.status(404).send({ status: "FAILED", data: "district not found" });
      return;
    }

    res.send({ status: "OK", data: district });
  } catch (err) {
    res.status(401).send({ status: "FAILED", error: err.message });
  }
});

module.exports = router;
