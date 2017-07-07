/**
 * Created by Administrator on 2017/7/7.
 */
function Node(data,left, right) {
    this.data = data
    this.left = left
    this.right = right
}
class Bst {
    constructor () {
        this.root = null
    }
    insert (data) {
        let node = new Node(data,null,null)
        if (!this.root) {
            this.root = node
        } else {
            let current = this.root,
                parent
            while (true) {
                parent = current
                if (data < current.data) {
                    current = current.left
                    if (current == null) {
                        parent.left = node
                        break
                    }
                } else {
                    current = current.right
                    if (current == null) {
                        parent.right = node
                        break
                    }
                }
            }
        }
    }
    remove (data) {
        let root = this._removeNode (this.root, data)
    }
    _removeNode (node,data) {
        if(node == null) { return null }
        if(data == node.data) { //找到节点对子节点处理 1 2 3
            //如果没有子节点
            if(node.left == null &&  node.right == null){
                return null;
            }
            //如果没有左节点
            if(node.left == null){
                return node.right;
            }
            //如果没有右节点
            if(node.right == null){
                return node.left;
            }

            //有两节点
            var tempNode = getSmallest(node.right);
            node.data = tempNode.data;
            node.right = this._removeNode(node.right,tempNode.data);
            return node;
        }else if(data < node.data){
            node.left = this._removeNode(node.left,data);
            return node;
        }else{
            node.right = this._removeNode(node.right,data);
            return node;
        }
    }
    getSmallest (node) {
        var current = node;
        while(!(current.left == null)){
            current = current.left;
        }
        return current;
    }
    find(data){
        var current = this.root;
        while(current != null){
            if(data == current.data){
                return current;
            }else if(data < current.data){
                current = current.left;
            }else{
                current = current.right;
            }
        }
        return null;
    }
    getMin(){// 最左侧的子节点是最小值
        var current = this.root;
        while(!(current.left == null)){
            current = current.left;
        }
        return current.data;
    }
    getMax(){
        var current = this.root;
        while(!(current.right == null)){
            current = current.right;
        }
        return current.data;
    }
}