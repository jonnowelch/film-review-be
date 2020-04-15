const { reviewData } = require("../data/index.js");

exports.seed = function (knex) {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
      const reviewInsertions = knex("review_table").insert(reviewData);
      return Promise.all([reviewInsertions]);
    });
};
