const withSass = require('@zeit/next-sass');
const { parsed, error } = require('dotenv').config();

if (error) throw error;

module.exports = withSass({
    env: parsed
});