/**
 * Created by Administrator on 2017/7/18.
 */
/**
 *算法思想：将数组按照大的间隔进行比较，做插入排序
 * 将间隔缩小，做插入排序
 * 直至间隔为1.
 * @param arr
 * @returns {*}
 */
function shellSort(arr) {
    var len = arr.length,
        temp,
        gap = 1;

    while(gap < len/5) {          //动态定义间隔序列
        gap =gap*5+1;
    }
    for (gap; gap > 0; gap = Math.floor(gap/2)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i]; //无序数
            for (var j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
                arr[j+gap] = arr[j];//大于无序数，则覆盖，插入的算法思想核心
            }
            arr[j+gap] = temp;//再把无序数放到刚好的位置。
        }
    }
    return arr;
}
function shellSort_1 (arr) {
    let temp;
    if (!arr.length) {
        return []
    }
    let gap = 5
    for (gap; gap > 0 ; gap = Math.floor(gap/2) ){ //第一层，减小gap 直到gap == 1.
        for (var i = gap; i < arr.length; i++) {// 用gap 对数据数组做划分。
            temp = arr[i]
            console.log('temp '+temp)
            let j = i - gap
            while (j >= 0 && arr[j] > temp) { //对每一个划分子数组进行插入排序.精髓点在于，子数组的产生：因为i在增加，所以满足要求的子数组也会越来越长
                arr[j+gap] = arr[j]
                j-=gap
            }
            arr[j+gap] = temp
        }
        console.log('break')
    }
    return arr
}



var arr=[21, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 7, 48, 50]
console.log(shellSort_1(arr))
console.log(shellSort(arr))