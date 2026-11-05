class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
let arr=[5,6,7,null,10,null,8,9,11,2];
let root=convertTotree(arr)
function convertTotree(arr){
    let root=new Node(arr[0]);
    let queue=[root];
    let i=1
    while(i<arr.length && queue.length!=0){
        let curr=queue.shift();
        if(arr[i]!=null){
            curr.left=new Node(arr[i]);
            queue.push(curr.left)
        }
        i++;
        if(i<arr.length){
           if(arr[i]!=null){
            curr.right=new Node(arr[i]);
            queue.push(curr.right)
        } 
        }
        i++;

    }
    return root;
}
rightBoundaryTraversal(root)
function rightBoundaryTraversal(root){
    let ans=[];
    if(root==null){
        return ans
    }
    function isLeafNode(root){
        return root.left==null && root.right==null;
    }
    if(isLeafNode(root)==false){
        ans.push(root.data)
    }
    else{
        return [root.data]
    }
    let curr=root.right;
    while(curr!=null){
      
        if(isLeafNode(curr)==false){
            ans.push(curr.data)
        }
        if(curr.right!=null){
            curr=curr.right;
        }
        else{
            curr=curr.left;
        }
    }
  
    addLeafNodes(root);
    function addLeafNodes(root){
        if(root==null){
            return;
        }
        if(root.left==null && root.right==null){
            ans.push(root.data);
            return;
        }
        addLeafNodes(root.right);
        addLeafNodes(root.left)

    }
    
    let stack=[];
    curr=root.left;
    while(curr!=null){
        if(isLeafNode(curr)==false){
            stack.push(curr.data)
        }
        if(curr.left!=null){
            curr=curr.left
        }
        else{
            curr=curr.right
        }
    }
    while(stack.length!=0){
    ans.push(stack.pop())
 }
 console.log(ans)
}