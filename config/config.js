// const dotenv = require('dotenv').config();

const {
    PORT,
    DATABASE_URL
} = process.env;

module.exports = {
    port: PORT,
    dbUrl: DATABASE_URL
};
