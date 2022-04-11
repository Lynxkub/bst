class Node {
    constructor(val , left = null , right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
    }

    insert(val) {
        if(this.root === null) {
            this.root = new Node(val);
            return val
        }
        let currNode = this.root;
        while(currNode){
        if(val > currNode.val) {
            if(!currNode.right) {
                currNode.right = new Node(val)
                return val
            }else {
                currNode = currNode.right;
            }
        }
        if(val < currNode.val) {
            if(!currNode.left) {
                currNode.left =  new Node(val);
                return val
            }else {
                currNode = currNode.left;
            }
        }
    }
    }

    insertRecursively(val , currNode = this.root) {
        if(this.root === null) {
            this.root = new Node(val);
            return val;
        }
        if(currNode.val === val) throw new Error('This already exists in tree') 
       if(val > currNode.val && currNode.right) this.insertRecursively(val , currNode.right) 
       if(val < currNode.val && currNode.left) this.insertRecursively(val , currNode.left)
       if(val > currNode.val && !currNode.right) currNode.right = new Node(val);
       if(val < currNode.val && !currNode.left) currNode.left = new Node(val);
       return val;
    }

    find(val) {
        let currNode = this.root;
        while(currNode){
        if(currNode.val === val) return currNode;
        if(val > currNode.val){
            if(!currNode.right) {
                return undefined
            }else{
                currNode = currNode.right;
            }
        }else {
            if(!currNode.left){
                return undefined
            }else {
                currNode = currNode.left;
            }
        }
        }
    }

    findRecursively(val , currNode = this.root){
        if(this.root === null) {
            return undefined;
        }
        if(currNode.val === val) return currNode;
        if(val > currNode.val && currNode.right) return this.findRecursively(val , currNode.right);
        if(val < currNode.val && currNode.left) return this.findRecursively(val , currNode.left);
        if(val > currNode.val && !currNode.right) return undefined;
        if(val < currNode.val && !currNode.left) return undefined;
    }

    dfsPreOrder(node = this.root) {
        console.log(node.val)
        if(node.left) this.dfsPreOrder(node.left);
        if(node.right) this.dfsPreOrder(node.right);
        
    }

    dfsInOrder(node = this.root) {
        if(node.left) this.dfsInOrder(node.left);
        console.log(node.val)
        if(node.right) this.dfsInOrder(node.right);
    }

    dfsPostOrder(node = this.root) {
        console.log(node.val);
        if(node.right) this.dfsPostOrder(node.right);
        if(node.left) this.dfsPostOrder(node.left);
    }

    bfs(node = this.root) {
       let queue = [];
       let data = [];

       queue.push(node);

       while(queue.length) {
           node= queue.shift();
           data.push(node.val);
           if(node.left) {
               queue.push(node.left);
           }
           if(node.right) {
               queue.push(node.right)
           }
       }
       return data
    }
}