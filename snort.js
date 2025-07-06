import fs from 'fs/promises'

export default async function snort(file) {
    const data = await fs.readFile(file, 'utf-8')
    const words = data.split('\n')
    words.sort()
    console.log(words.join('\n'))
}

snort('words.txt')