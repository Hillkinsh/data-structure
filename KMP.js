/**
 * Created by Administrator on 2017/7/5.
 */
//原理
/**
 * 首先部分匹配值表的计算
 * 计算这个，next和前缀后缀方法原理是相同的，不同的是需要把每一项都减去一
 * 前缀后缀法更直观和好理解。就是字符串的子字符串的前缀和后缀的相同的最大长度返回即可
 * 比如 ABCDABD
 * －"A"的前缀和后缀都为空集，共有元素的长度为0；
 －"AB"的前缀为[A]，后缀为[B]，共有元素的长度为0；
 －"ABC"的前缀为[A, AB]，后缀为[BC, C]，共有元素的长度0；
 －"ABCD"的前缀为[A, AB, ABC]，后缀为[BCD, CD, D]，共有元素的长度为0；
 －"ABCDA"的前缀为[A, AB, ABC, ABCD]，后缀为[BCDA, CDA, DA, A]，共有元素为"A"，长度为1；
 －"ABCDAB"的前缀为[A, AB, ABC, ABCD, ABCDA]，后缀为[BCDAB, CDAB, DAB, AB, B]，共有元素为"AB"，长度为2；
 －"ABCDABD"的前缀为[A, AB, ABC, ABCD, ABCDA, ABCDAB]，后缀为[BCDABD, CDABD, DABD, ABD, BD, D]，共有元素的长度为0
 *故有 0 0 0 0 1 2 0
 */
function next (str) {
    let nextArray = []
    nextArray[1] = 0
    let i = 1, j = 0
    let length = str.length
    while (i < length) {
        if (j == 0 || str[i] == str[j]) {
            ++i
            ++j
            nextArray[i] = j
        } else {
            j = nextArray[j]
        }
    }
    let temp = []
    for (let i = 1; i < nextArray.length; i++) {
        if (nextArray[i] > 0) {
            temp.push(nextArray[i] - 1)
        } else {
            temp.push(nextArray[i])
        }

    }
    return temp
}

//KMP
//根据部分匹配表.每次移动长度为 “已匹配长度 - 部分匹配值”
function KMP(S,T) {
    let nextArray = next(T)
    console.log(nextArray)
    let i = 0
    let temp = 0 //移动位数
    while (i < S.length) {
        for (let j = 0; j <= T.length; j++) {
            if (j == T.length) { //“牵手”成功，返回匹配的初始位置
                return i
            }
            if (T[j] !== S[i+j]) {
                temp = j
                break
            }
        }
        if (temp == 0) { //如果全无匹配，仍然需要向下滚动
            temp =1
        }
        i = i+temp - nextArray[temp]
    }
    return -1
}