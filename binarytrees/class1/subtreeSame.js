class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;   
    }
}
let root1 = new Node(1);

root1.left = new Node(2);
root1.right = new Node(3);

root1.left.left = new Node(4);
root1.left.right = new Node(5);
root1.right.right=new Node(6);
let root2=new Node(2);
root2.left = new Node(4);
root2.right = new Node(5);

console.log(isSubtree(root1,root2))
function isSubtree(root1, root2) {

    // Empty second tree is a subtree
    if (root2 == null) {
        return true;
    }

    // First tree is empty, but second tree is not
    if (root1 == null) {
        return false;
    }

    // Check whether the current trees are identical
    if (root1.data == root2.data) {
        if (isSubTreeSame(root1, root2)) {
            return true;
        }
    }

    // Search in left and right subtrees
    let lt = isSubtree(root1.left, root2);
    let rt = isSubtree(root1.right, root2);

    return lt || rt;
}


// Function to check whether two trees are identical
function isSubTreeSame(root1, root2) {

    if (root1 == null && root2 == null) {
        return true;
    }

    if (root1 == null || root2 == null) {
        return false;
    }

    if (root1.data != root2.data) {
        return false;
    }

    let leftsee = isSubTreeSame(root1.left, root2.left);
    let rightsee = isSubTreeSame(root1.right, root2.right);

    return leftsee && rightsee;
}
levelOrder(root1)
function levelOrder(root1){
    let queue=[root1];
    let ans=[];
    while(queue.length!=0){
        let size=queue.length;
       
        let level=[]
        for(let i=0;i<size;i++){
             let curr=queue.shift();
            if(curr.left!=null){
                queue.push(curr.left);
                
            }
            if(curr.right!=null){
                queue.push(curr.right);
                
            }
            level.push(curr.data)

        }
        ans.push(level)
    }
    console.log(ans)
}
zigzagTraversal(root1)
function zigzagTraversal(root1){
    let flag=0;
    let queue=[root1];
    let ans=[];
    while(queue.length!=0){
        let level=[];
        let size=queue.length;
        for(let i=0;i<size;i++){
            let curr=queue.shift();
            if(curr.left!=null){
                queue.push(curr.left)
            }
            if(curr.right!=null){
                queue.push(curr.right)
            }
            level.push(curr.data)
        }
        if(flag==0){
            ans.push(level);
            flag=1
        }
        else{
            ans.push(reverse(level));
            flag=0;
        }
          
    }
    console.log(ans)
}
function reverse(arr){
    let left=0;
    let right=arr.length-1;
    while(left<=right){
        [arr[left],arr[right]]=[arr[right],arr[left]];
        left++;
        right--;
    }
    return arr;
}
leftBoundaryTraversal(root1)
function leftBoundaryTraversal(root1){
    let ans=[];
    function isLeafNode(root){
        return root.left==null && root.right==null
    }
    if(root1==null){
        return ans;
    }
    if(isLeafNode(root1)==false){
        ans.push(root1.data)
    }
    else{
        return [root1.data]
    }
    let curr=root1.left;
    while(curr!=null){
        if(isLeafNode(curr)==false){
            ans.push(curr.data)
        }
        if(curr.left!=null){
            curr=curr.left
        }
        else{
            curr=curr.right
        }
    }
    console.log(ans)
    addLeafNodes(root1)
    function addLeafNodes(root){
        if(root==null){
            return;
        }
        if(root.left==null && root.right==null){
            ans.push(root.data);
            return;
        }
        addLeafNodes(root.left);
        addLeafNodes(root.right);

    }
    console.log(ans);
    let stack=[];
    curr=root1.right;
    while(curr!=null){
        if(isLeafNode(curr)==false){
            stack.push(curr.data)
        }
        if(curr.right!=null){
            curr=curr.right;
        }
        else{
              curr=curr.left;
        }
    }
    while(stack.length!=0){
        ans.push(stack.pop())
    }
    console.log(ans)
 
}
