const ENV = process.env.NODE_ENV || "development";
const { DB_URL } = process.env;

const baseConfig = {
  client: "pg",
  migrations: {
    directory: "./db/migrations",
  },
  seeds: {
    directory: "./db/seeds",
  },
};

const customConfig = {
  development: {
    connection: {
      database: "film_review",
      username: "jonno",
      password: "password",
    },
  },
  test: {
    connection: {
      database: "film_review_test",
      username: "jonno",
      password: "password",
    },
  },
  production: {
    connection: `${DB_URL}?ssl=true`,
  },
};

module.exports = { ...customConfig[ENV], ...baseConfig };
