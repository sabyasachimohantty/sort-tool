import fs from 'fs/promises'
import randomSort from './randomSort.js'
import mergeSort from './mergeSort.js'
import quickSort from './quickSort.js'

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
        // mergeSort(words)
        quickSort(words)
    }
    console.log(words.join('\n'))
}