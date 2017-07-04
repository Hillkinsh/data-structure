/**
 * Created by Administrator on 2017/7/4.
 */
//顺序队列
class Quene {
    constructor () {
        this.data = []
    }
    push (ele) {
        this.data.push(ele)
    }
    shift () {
        if (this.data.length == 0) {
            console.log ('队列为空')
        } else {
            return this.data.splice(0,1)
        }
    }
    clear () {
        this.data = []
    }
    getTop () {
        return this.data[0]
    }
    leng () {
        return this.data.length
    }
}

//链式队列
class Quene2 {
    constructor () {
        this.front = this.rear = null
        this.length = 0
    }
    push (ele) {
        let node = {
            data:ele,
            next:null
        }
        if (this.front == null) {
            this.rear = this.front = node
        } else {
            this.rear.next = node  //这个思路是链式队列的关键。之前的理解把方向想反了。
            this.rear = node
        }
        this.length++
    }
    shift () {
        if (this.front) {
            let temp = this.front.data
            this.front = this.front.next
            if(this.front == null ) {
                this.rear = null
            }
            this.length--
            return temp
        } else {
            return null
        }
    }
    clear () {
        this.rear = this.front = null;
        this.length = 0;
    }
    getTop () {
        return this.front ? this.front.data : null;
    }
    leng () {
        return this.length
    }
}

//循环队列
class CycleQueue {
    constructor () {
        this.base = {}  //为什么一定要对象而非数组。原因就是删除首位置，会移动后面部分
        this.MAXSIZE = 10
        this.front = this.rear = 0
        this.length = 0
    }
    push (ele) {
        if (this.length == this.MAXSIZE) {
            throw new Error('cycleQueue full')
        }
        this.base[this.rear] = ele
        this.rear = (this.rear + 1) % this.MAXSIZE
        this.length++
    }
    shift () {
        if (this.length == 0) {
            throw new Error('cycleQueue empty!')
        }
        let temp = this.base[this.front]
        this.front = (this.front + 1) % this.MAXSIZE
        this.length--
        return temp
    }
    clear () {
        this.base = {}
        this.front = this.rear = 0
        this.length = 0
    }
    getTop () {
        let temp = this.base[this.front]
        return temp ? temp : null;
    }
    leng () {
        return this.length
    }
}