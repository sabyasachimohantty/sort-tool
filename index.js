#!/usr/bin/env node
import { Command } from 'commander'
import snort from './snort.js'

const program = new Command()

program
    .name("Snorted")
    .description("sorts line of text files")
    .version("1.0.0")

program
    .argument("<file>")
    .option("-u")
    .action((file) => {
        const options = program.opts()
        const unique = 'u' in options ? true : false
        snort(file, unique)
    })

program.parse(process.argv)