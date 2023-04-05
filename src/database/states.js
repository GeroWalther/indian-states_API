const getDB = require("./db");

const getAllStates = async () => {
  return await getDB().states.find().toArray();
};

const getState = async (id) => {
  return await getDB().states.findOne({ state_id: id });
};

module.exports = {
  getAllStates,
  getState,
};
