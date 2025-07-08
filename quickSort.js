export default function quickSort(arr, low = 0, high = arr.length - 1){
    if (low >= high) return
    const partitionInd = partition(arr, low, high)
    quickSort(arr, low, partitionInd - 1)
    quickSort(arr, partitionInd + 1, high)
}

function partition(arr, low, high) {
    const pivot = arr[low]
    let i = low
    let j = high
    while (i < j) {
        while (arr[i] <= pivot && i < high) {
            i++
        }
        while (arr[j] > pivot && j > low) {
            j-- 
        }
        if (i < j) {
            let tmp = arr[i]
            arr[i] = arr[j]
            arr[j] = tmp
        }
    }
    let tmp = arr[low]
    arr[low] = arr[j]
    arr[j] = tmp
    return j
}

// const nums = [34, 23, 100, 5, 90]
// quickSort(nums)
// console.log(nums)