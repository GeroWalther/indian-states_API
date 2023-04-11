const express = require("express");
const router = express.Router();
const { getAllStates } = require("../database/states");

router.get("/", async (req, res) => {
  const states = await getAllStates();
  res.send({ status: "OK", data: states });
});

// router.get("/:Id", async (req, res) => {
//   try {
//     const state = await getState(req.params.Id);

//     if (!state) {
//       res.status(404).send({ status: "FAILED", data: "state not found" });
//       return;
//     }

//     res.send({ status: "OK", data: state });
//   } catch (err) {
//     res.status(401).send({ status: "FAILED", error: err.message });
//   }
// });

module.exports = router;
