/**
 * Created by Administrator on 2017/7/4.
 */
function Node (data,next) {
    this.data = data
    this.next = next
}
class List4{
    constructor () {
        this.pRear = null
        this.length = 0
    }
    insertAtEnd (data) {
        if (this.length == 0) {
            let node = new Node(data,this.pRear)
            this.pRear = node
            node.next = this.pRear
        } else {
            let node = new Node (data,this.pRear.next)
            this.pRear.next = node //把最末个节点的next指向node。形成新闭环
            this.pRear = node  //移动指针到新的最末个节点
        }
        this.length++;
    }
    insertAtBegin (data) {
        if (this.length == 0) {
            let node = new Node(data,this.pRear)
            this.pRear = node
            node.next = this.pRear
        } else {
            let node = new Node (data,this.pRear.next)
            this.pRear.next = node  //最末个节点不移动，则新节点就是首节点。
        }
        this.length ++
    }
    _locate (index) { //返回定位点的节点
        if (index < 0 || index > this.length - 1) {
            throw new Error ('索引值超范围')
        }
        let temp = this.pRear.next
        for(let i = 0; i < index; i++) {
            temp = temp.next
        }
        return temp
    }
    insert (data,index) {
        if (index < 0 || index > this.length - 1) {
            throw new Error ('索引值超范围')
        }
        if (index == 0) {
            this.InsertAtFirst(data);
        } else if (index == this.length) {
            this.InsertAtEnd(data);
        } else {
            var node = new Node(data,this._locate(index));
            this._locate(index - 1).next = node;
            this.length++;
        }
    }
    find (data) {
        let temp = this.pRear.next //首节点
        for (let i = 0; i < this.length; i++) {
            if(data == temp.data) {
                return i
            }
            temp = temp.next
        }
        return -1
    }
    clear () {
        this.length = 0;
        this.pRear = null;
    }
    remove (index) { //删除某位置元素，并返回该节点值
        if (index < 0 || index > this.length - 1) {
            throw new Error ('索引值超范围')
        }
        if (this.length == 1) {
            let temp = this.pRear.data
            this.clear()
            return temp
        }
        if (index == 0) {
            this.pRear.next = this._locate(0).next
        } else {
            this._locate(index - 1).next = this._locate(index).next
        }
    }
    display () {
        console.log('display  ' + this.length)
        let temp = this.pRear.next
        for (let i = 0; i < this.length; i++) {
            console.log(temp.data)
            temp = temp.next
        }
    }
}