class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
let arr=[
    1, 2, 3,
    null, 4, null, null,
    null, 5, 
    null, 6
];

let root=convertTotree(arr);
console.log(root.left.right.right.right)
function convertTotree(arr) {
    if (arr.length === 0 || arr[0] === null) return null;

    let root = new Node(arr[0]);
    let queue = [root];
    let i = 1;

    while (i < arr.length && queue.length > 0) {
        let current = queue.shift();

        // Create left child
        if (arr[i] !== null && i < arr.length) {
            current.left = new Node(arr[i]);
            queue.push(current.left);
        }
        i++;

        // Create right child
        if (i < arr.length && arr[i] !== null) {
            current.right = new Node(arr[i]);
            queue.push(current.right);
        }
        i++;
    }

    return root;
}
topView(root)
function topView(root){
    let queue=[[root,0]];
    let map=new Map()
    while(queue.length!=0){
        let [node,col]=queue.shift();
        if(!map.has(col)){
            map.set(col,node.data)
        }
        if(node.left!=null){
            queue.push([node.left,col-1])
        }
        if(node.right!=null){
            queue.push([node.right,col+1])
        }

    }
    let ans=[]
    let columns = [...map.keys()].sort((a, b) => a - b);
    for(let i=0;i<columns.length;i++){
     ans.push(map.get(columns[i]))   
    }
    console.log(ans)
}
BottomView(root)
function BottomView(root){
    let queue=[[root,0]];
    let map=new Map()
    while(queue.length!=0){
        let [node,col]=queue.shift();
       
            
      
            map.set(col,node.data)
        
        if(node.left!=null){
            queue.push([node.left,col-1])
        }
        if(node.right!=null){
            queue.push([node.right,col+1])
        }

    }
    let ans=[]
    let columns = [...map.keys()].sort((a, b) => a - b);
    for(let i=0;i<columns.length;i++){
     ans.push(map.get(columns[i]))   
    }
    console.log(ans)
}
leftView(root)
function leftView(root){
    let queue=[[root,0]];
    let map=new Map()
 while(queue.length!=0){
        let [node,row]=queue.shift();
        if(!map.has(row)){
            map.set(row,node.data)
        }
        if(node.left!=null){
            queue.push([node.left,row+1])
        }
        if(node.right!=null){
            queue.push([node.right,row+1])
        }

    }
    let ans=[]
    let rows = [...map.keys()].sort((a, b) => a - b);
    for(let i=0;i<rows.length;i++){
     ans.push(map.get(rows[i]))   
    }
    console.log(ans)
}
rightView(root)
function rightView(root){
    let queue=[[root,0]];
    let map=new Map()
 while(queue.length!=0){
        let [node,row]=queue.shift();
       
            map.set(row,node.data)
        
        if(node.left!=null){
            queue.push([node.left,row+1])
        }
        if(node.right!=null){
            queue.push([node.right,row+1])
        }

    }
    let ans=[]
    let rows = [...map.keys()].sort((a, b) => a - b);
    for(let i=0;i<rows.length;i++){
     ans.push(map.get(rows[i]))   
    }
    console.log(ans)
}
diagonalTraverasal(root)
function diagonalTraverasal(root){
    let queue=[[root,0]];
    let map=new Map();
    while(queue.length!=0){
        let [node,dia]=queue.shift();
        if(!map.has(dia)){
            map.set(dia,[])
        }
        map.get(dia).push(node.data);
        if(node.left!=null){
            queue.push([node.left,dia+1])
        }
        if(node.right!=null){
            queue.push([node.right,dia])
        }
    }
    console.log(map)
}