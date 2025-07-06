import fs from 'fs/promises'

export default async function snort(file, unique) {
    const data = await fs.readFile(file, 'utf-8')
    let words = data.split('\n')
    if (unique === true) {
        const setWords = new Set(words)
        words = [...setWords]
    }
    words.sort()
    console.log(words.join('\n'))
}