require('dotenv').config({
  path: ".env"
});

module.exports = {
  dialect: process.env.DB_DIALECT || "sqlite",
  storage: process.env.DB_STORAGE || "./database/db.sqlite",
  operatorsAliases: false,
  logging: false,
  define: {
    timestamps: false,
    underscored: true,
    underscoredAll: true
  }
}