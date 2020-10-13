#!/usr/bin/env node
'use strict';

const { Command } = require('commander');
const program = new Command();
program.version('0.0.1');


program.command('test').action(async => {})

program.parse(process.argv);