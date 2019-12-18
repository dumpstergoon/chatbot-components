// @ts-nocheck
const client = require("./client");
module.exports = (bot_name, session_id) =>
	client(`${process.env.BOT || require('../config.json').uri}/exchange/${bot_name}/${session_id}`);
