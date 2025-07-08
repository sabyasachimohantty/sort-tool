export default function mergeSort(arr, low = 0, high = arr.length - 1) {
    if (low >= high) return

    const mid = Math.floor((low + high) / 2)
    mergeSort(arr, low, mid)
    mergeSort(arr, mid + 1, high)
    merge(arr, low, mid, high)
}

function merge(arr, low, mid, high) {
    let left = low
    let right = mid + 1
    const tmp = []

    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            tmp.push(arr[left])
            left++
        } else {
            tmp.push(arr[right])
            right++
        }
    }

    while (left <= mid) {
        tmp.push(arr[left])
        left++
    }

    while (right <= high) {
        tmp.push(arr[right])
        right++
    }

    for (let i = 0; i < tmp.length; i++) {
        arr[low + i] = tmp[i]
    }
}

// const nums = [23, 6, 0, 56, 1]
// mergeSort(nums)
// console.log(nums)