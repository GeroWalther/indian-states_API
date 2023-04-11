const getDB = require("./db");

const getAllDistricts = async () => {
  return await getDB().districts.find().toArray();
};

const getDistricts = async (id) => {
  return await getDB()
    .districts.find({
      state_id: id,
    })
    .toArray();
};

module.exports = {
  getAllDistricts,
  getDistricts,
};
