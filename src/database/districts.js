const getDB = require("./db");

const getAllDistricts = async () => {
  return await getDB().districts.find().toArray();
};

const getDistricts = async (id) => {
  return await getDB().districts.findOne({
    district_id: id,
  });
};

module.exports = {
  getAllDistricts,
  getDistricts,
};
