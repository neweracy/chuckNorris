#!/usr/bin/env node

/**
 * chuckNorris
 * git a joke from chucknorris api
 *
 * @author neweracy <https://github.com/neweracy>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const axios = require("axios");

const input = cli.input;
const flags = cli.flags;
const {
	clear,
	debug
} = flags;

(async () => {
	init({
		clear
	});
	input.includes(`help`) && cli.showHelp(0);
	debug && log(flags);
	if (input.includes('joke')) {
		const res = await axios.get('https://api.chucknorris.io/jokes/random')
		console.log(res.data.value)
	}
})();