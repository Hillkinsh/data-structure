/**
 * Created by Administrator on 2017/7/16.
 */
/**
 * 算法思想：数列的一部分有序，取有序后面的第一个数据元素，从后向前依次比较
 * 当发现 arr[j] > temp， 就是数据复制，覆盖后面一个数据。
 * 因为arr[j+1]即第一个无序数已保存在temp,这么做便毫无问题
 * 上述过程在arr[j] <= temp时，被打断，
 * 进行 arr[j+1] = temp，把temp值赋给最后一个比他大的位置。完成
 * @param arr
 * @returns {*}
 */

function insertionSort(arr) {
    for (let i=1; i<arr.length;i++) {
        let j = i - 1
        let temp = arr[i]
        while (j>= 0 && arr[j] > temp) {
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = temp//这个操作是因为上面的j--才造成这里的要加1.

    }
    return arr
}