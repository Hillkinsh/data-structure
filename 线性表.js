/**
 * Created by Administrator on 2017/7/3.
 */
function Node(data) {
    this.data = data
    this.next = null
}

class MyList2 {
    constructor () {
        this.length = 0
        this.data = null
    }

    insert (data,pos) {  //插入
        let position = pos != null ? pos:this.length
        if (position> this.length) {
            return false
        }
        this.length += 1
        let newNode = new Node(data)

        if (this.data == null ) {  //为空，插入则为头结点
            this.data = newNode
            return
        }
        if(position == 0 ) { //插入首位置
            let temp = this.data
            newNode.next = temp
            this.data = newNode
        } else {  //非首位置
            let tempNode = this.data
            for (let i = 0; i < position-1; i++) { //先取到最后一个节点。
                tempNode = tempNode.next
            }
            let afterTemp = tempNode.next
            tempNode.next = newNode
            newNode.next = afterTemp
        }
    }
    display () { //显示
        document.write("elements in list as follows:<br>")
        let temp = this.data
        while(temp != null){
            document.write(temp.data + " ");
            temp = temp.next;
        }
        document.write("<br>");
    }
    remove ( pos) { //移除
        if (pos >= this.length ||pos <0){
            return null
        }
        this.length--
        let tempNode = this.data
        if (pos == 0) { //在首位置，直接覆盖
            let temp = this.data.data //需要节点值，不需要之间关系
            this.data = this.data.next
            return temp
        }
        for ( let i = 0; i < pos-1; i++) {
            tempNode = tempNode.next
        }
        let temp = tempNode.next
        tempNode.next = tempNode.next.next
        return temp.data
    }
    find (data) {  //查找
        let i = 0
        let temp = this.data
        while (temp.data != null) {
            console.log('out i  '+i)

            if(temp.data == data){
                return i
            }
            i++
            if(temp.next != null){
                temp = temp.next
            } else {
                return -1
            }
        }
        return -1
    }
    clear () {
        this.length = 0
        this.data = null
    }
    leng () {
        return this.length
    }
}