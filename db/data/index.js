const ENV = process.env.NODE_ENV || "development";

const testData = require("./test-data/reviews");
const developmentData = require("./dev-data/reviews");

const data = {
  test: testData,
  development: developmentData,
  production: developmentData,
};

module.exports = data[ENV];
