import fs from 'fs/promises'
import randomSort from './randomSort.js'

export default async function snort(file, unique, randomFlag) {
    const data = await fs.readFile(file, 'utf-8')
    let words = data.split('\n')
    if (unique) {
        const setWords = new Set(words)
        words = [...setWords]
    }
    if (randomFlag) {
        randomSort(words)
    } else {
        words.sort()
    }
    console.log(words.join('\n'))
}