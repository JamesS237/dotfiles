#!/usr/bin/env node
var colors = require('colors')
var minimal = false;
if(process.argv.indexOf('-m') > -1) {
	minimal = true;
}
require('dns').resolve('www.google.com', function(err) {
	if(err) {
		console.log(minimal ? 'false' : 'You are not connected to the internet!'.red.bold)
	} else {
		console.log(minimal ? 'true' : 'You are connected to the internet!'.green.bold)
	}
})
