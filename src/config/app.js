require('dotenv').config({
  path: ".env"
});

module.exports = {
  key: process.env.APP_KEY || 'NonHashedKey'
}
