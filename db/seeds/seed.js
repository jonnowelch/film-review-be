const reviewData = require("../data/index.js");

exports.seed = function (knex) {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
      const reviewInsertions = knex("reviews_table")
        .insert(reviewData)
        .returning("*");
      return Promise.all([reviewInsertions]);
    })
    .then((data) => console.log(data));
};
