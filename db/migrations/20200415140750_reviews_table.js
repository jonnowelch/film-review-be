exports.up = function (knex) {
  return knex.schema.createTable("reviews_table", (reviewsTable) => {
    reviewsTable.increments("key").primary();
    reviewsTable.string("title").notNullable();
    reviewsTable.string("body").notNullable();
    reviewsTable.integer("rating").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("reviews_table");
};
