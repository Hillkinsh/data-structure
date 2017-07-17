/**
 * Created by Administrator on 2017/7/17.
 */
/**
 * 快排算法思想：
 * 取到数组的首元素，然后逐个比较小的放左边大的放右边，直到全部比完，完成一次比较
 * 再对左右两边的子数组，执行上述过程，递归直到子数组中只有一个元素为止。
 * 实现方式：
 * 取数组的首元素，从最后位置开始比较，当发现比flag小，就把该值赋给arr[i]
 * 从i+1开始向后比较，当发现比flag大，把该值赋给arr[j].当j == i停止比较。把flag
 * 递归上述过程。
 * @param arr
 * @returns {*}
 */

function quiSort(arr){
    function sort(prev,length) {
        let flag = arr[prev]
        let i = prev,
            j = length-1
        if((j - i > 0)) {
            while(i　< j) {
                for (; i < j; j--) {
                    if (arr[j] < flag) {
                        arr[i++] = arr[j]
                        break
                    }
                }
                for(; i < j; i++) {
                    if(arr[i] > flag) {
                        arr[j--] = arr[i]
                        break
                    }
                }
            }
            arr[i] = flag
            sort(0,i)
            sort(i+1,length)
        }
    }
    sort(0,arr.length)
    return arr
}
/**
 * es6解法暴力且简练，是贯彻快排思路的算法
 * 解析一下：
 * 1，取到数组首个位置作为标记值
 * 后续部分作为待比较数组。
 * 将比较小的部分筛选出来放左边
 * 将比较大的部分筛选出来放右边
 * 递归
 * 停止的条件是参数数组无值。
 * @param arr
 * @returns {*}
 */
function quickes6(arr) {
    if (!arr.length) {return []}
    const [pivot,...rest] = arr
    return [
        ...quickes6(rest.filter(x => x < pivot)),
        pivot,
        ...quickes6(rest.filter(x => x >= pivot))
]
}
let arr = [5,1,9,3,7,4,8,6,2]
console.log(quickes6(arr))