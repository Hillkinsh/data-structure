/**
 * Created by Administrator on 2017/7/16.
 */
/**
 * 算法思路：有序数组，取到数组的首和末位置。
 * 然后取到中间值，判断 key与中间值关系
 * 1）若相等，返回下标
 * 2）若key<middle。right = middle - 1;继续迭代
 * 3）若key>middle。left = middle + 1;继续迭代
 * 直至就剩一个元素为止。
 * @param array
 * @param key
 * @returns {*}
 */
function binarySearch(array,key) {
    let left = 0,
        right=array.length;
    while (left < right) {
        var middle = parseInt((left + right) / 2); //取得中间值
        console.log(middle)
        if (key < array[middle]) {
            right = middle - 1;
            if (right == left) {
                if (key == array[right]){
                    return right
                } else {
                    return -1
                }
            }
        } else {
            console.log('hello?')
            if (key == array[middle]) {
                return middle
            }
            left = middle + 1;
            if (right == left){
                if (key == array[left]){
                    return left
                } else {
                    return -1
                }
            }
        }
    }

}
var arr=[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
console.log(binarySearch(arr,19))