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
    .option("-R")
    .action((file) => {
        const options = program.opts()
        const unique = 'u' in options ? true : false
        const randomFlag = 'R' in options ? true : false
        snort(file, unique, randomFlag)
    })

program.parse(process.argv)