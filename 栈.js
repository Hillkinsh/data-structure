/**
 * Created by Administrator on 2017/7/4.
 */
//顺序存储栈
class Stack {
    constructor (MAXSIZE) {
        this.maxsize = MAXSIZE
        this.data = []
        this.top = - 1
    }
    push (ele) {
        if (this.top == this.maxsize - 1) {
            console.log('栈满不可储存！！！')
            return
        }
        this.data[++this.top] = ele
    }
    pop () {
        if (this.top == -1) {
            console.log('已栈空！！')
            return
        }
        return this.data.splice(this.top--,1)
    }
    getTop () {
        return this.data[this.top]
    }
    clear () {
        this.top = -1
        this.data = []
    }
    leng () {
        return this.top + 1
    }
}
//链式栈
function Node(data) {
    this.data = data
    this.next = null
}
class Stack2 {
    constructor () {
        this.top = - 1
        this.data = null
    }
    push (ele) {
        let node = new Node(ele)
        if (this.top == -1) {
            this.data = node
        } else {
            node.next = this.data
            this.data = node
        }
        this.top ++
    }
    pop () {
        if (this.top == -1) {
            console.log('栈空！！')
            return
        } else {
            let temp = this.data.data
            this.data = this.data.next
            this.top--
            return temp
        }
    }
    getTop () {
        return this.data.data
    }
    clear () {
        this.data = null
        this.top = -1
    }
    leng () {
        return this.top + 1
    }
}