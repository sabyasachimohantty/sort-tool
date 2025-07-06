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
    .action((file) => {
        snort(file)
    })