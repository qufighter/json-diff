#!/usr/bin/env node
require('iced-coffee-script/register')

require('../lib/cli')(process.argv.slice(2));
