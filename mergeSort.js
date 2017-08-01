/**
 * Created by Administrator on 2017/8/1.
 */
/**
 * 算法思想：把数组二分，再二分，直到全是单个元素。
 * 并：把分组比较排序，并为一组，返回。一层层比较，直到全是一整组
 *
 * 归并排序（MERGE-SORT）是建立在归并操作上的一种有效的排序算法,
 * 该算法是采用分治法的一个非常典型的应用。
 * 将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，
 * 再使子序列段间有序。若将两个有序表合并成一个有序表，称为二路归并。
 */
function　merge(left, right){
    var　result = [];
    while(left.length > 0 && right.length > 0) {
        if(left[0] < right[0]){
            /*shift()方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。*/
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }
    return　result.concat(left).concat(right);
}
function　mergeSort(items){
    if(items.length <= 1){
        return　items;
    }
    var　middle = Math.floor(items.length / 2),
        left = items.slice(0, middle),
        right = items.slice(middle);
    return　merge(mergeSort(left), mergeSort(right));
}

var arr = [46,12,33,72,68,19,80,33];
console.log(mergeSort(arr));