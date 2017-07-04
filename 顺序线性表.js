/**
 * Created by Administrator on 2017/7/3.
 */

//顺序线性表的类。
class MyList {
    constructor () {
        this.length = 0
        this.data = []
    }
    init() {
        return new MyList()
    }
    addElement (e) {
        this.data[this.length++] = e
    }
    clear () {
        this.data.length = 0;
        this.length = 0
    }
    display () {
        for (let i in this.data) {
            console.log(this.data[i])
        }
    }
    find (e) {
        for (let i = 0; i < this.length; i++) {
            if (this.data[i] == e ) {
                return i;
            }
        }
        return - 1
    }
    insert(newElement,position) {
        let pos = position||this.data[this.length-1]
        let self = this
        this.data.splice(pos,0,newElement)
        this.length++
    }
    remove(pos) {
        if (pos < 0 || pos >= this.length) {
            console.log('超出范围')
            return
        }
        let temp = this.data.splice(pos,1)
        this.length--
        return temp[0]
    }

}