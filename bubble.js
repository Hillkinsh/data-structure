/**
 * Created by Administrator on 2017/7/10.
 * 冒泡排序原理
 * 用嵌套的循环，
 * 每一次将一个最大值冒泡出去，直到所有。
 * 下面个函数是一个优化，针对只有少部分乱序情况，可以迅速停止。
 */
function bubbleSort (arr) {
    for (let i = 0; i < arr.length; i ++) {
        for (let j = 0; j<arr.length-i-1;j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
function bubble(arr) {
    let flag = true
    for(let i = 1; i<arr.length && flag; i++) {
        flag = false
        for (let j = 1; j <= arr.length - i; j++){
            if (arr[j-1] > arr[j]) {
                flag = true
                let temp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = temp
            }
        }
    }
    return arr
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]
console.log(bubbleSort(arr))