/** @type {import('next-sitemap').IConfig} */

const config = require("./config/config");

module.exports = {
  siteUrl: config.siteUrl,
  generateRobotsTxt: true, // (optional)
  // ...other options
};
