function Node(data) {
    this.data = data
    this.prev = null
    this.next = null
}
class Dlist {
    constructor () {
        this.length = 0
        this.data = null
    }
    find (elem) {  //查找
        let current = this.data
        while (current !== null && current.data != elem) {
            current = current.next
        }
        return current
    }
    insert (data,elem) {  //插入
        this.length++
        let current
        if (elem) {  //先处理插入位置问题。若目标位置存在，则插在它后面，否则插在最后
            current = this.find(elem)
        } else {
            current = null
        }
        let newNode = new Node(data)
        if (this.data == null) { //链表为空情况，直接插
            this.data = newNode
            return
        }
        if (current) { //目标节点存在
            if (current.next) {
                let temp = current.next
                temp.prev = newNode
            }
            newNode.next = current.next
            newNode.prev = current
            current.next = newNode

        } else { //目标节点不存在
            let temp = this.data
            while (temp != null && temp.next != null) {
                temp = temp.next
            }
            temp.next = newNode
            newNode.prev = temp
        }

    }
    remove (pos) {  //移除
        if (pos < 0 || pos >= this.length) {
            console.log('不存在，无法删除！！！')
            return
        }
        let curNode = this.data  //首节点无误
        if (pos == 0) { //首位置
            let temp = this.data.data
            this.data = this.data.next
            this.data.prev = null
            this.length --
            return temp
        } else if (pos == this.length - 1) { //末位置
            for (let i = 0; i < pos; i++) {
                curNode = curNode.next
            }
            let temp = curNode.data
            curNode.prev.next = null
            this.length --
            return temp
        } else {
            for (let i = 0; i < pos; i++) {
                curNode = curNode.next
            }
            let temp = curNode.data
            curNode.prev.next = curNode.next;
            curNode.next.prev = curNode.prev;
            this.length--
        }

    }
    display () {  //输出
        let current = this.data
        while(current != null) {
            console.log(current.data)
            current = current.next
        }
    }
    findLast () {  //查找第末个
        let current = this.data
        while(current.next != null) {
            current = current.next
        }
        return current
    }
    disReverse() {  //逆向输出
        let last = this.findLast()
        while (last != null) {
            console.log(last.data)
            last = last.prev
        }
    }
    leng () { //链表长度
        return this.length
    }
    clear () {
        for(var key in this.data){ //遍历删光所有属性即可
            delete this.data[key];
        }
        this.length = 0
    }
}