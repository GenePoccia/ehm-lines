#!/usr/bin/env node
'use strict';

const { Command } = require('commander');
const program = new Command();
program.version('0.0.1');


const test = require('./src/src.js')

program.command('test').action(async () => test.here())

program.parse(process.argv);