
export default function randomSort(arr) {
    const arrLength = arr.length
    for (let i = 0; i < arrLength; i++) {
        const ind = getRandomIndex(i, arrLength)
        let tmp = arr[i]
        arr[i] = arr[ind]
        arr[ind] = tmp
    }
}

function getRandomIndex(min, max) {
    return min + Math.floor(Math.random() * (max - min))
}

