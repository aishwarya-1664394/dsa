class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
let arr=[1,2,3,4,5,null,null,null,null,6,7];
let root=convertTotree(arr);
console.log(root)
function convertTotree(arr){
    let root=new Node(arr[0]);
    let i=1;
    let queue=[root];
    while(i<arr.length && queue.length!=0){
        let curr=queue.shift()
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
leftLeaf(root)
function leftLeaf(root){
    let sum=0
    sumOfLeftLeaf(root);
    console.log(sum)
function sumOfLeftLeaf(root){
    if(root==null){
        return;
    }
    if(root.left!=null && root.left.left==null && root.left.right==null){
        sum+=root.left.data;
        
    }
    sumOfLeftLeaf(root.left);
    sumOfLeftLeaf(root.right);

}
}
goodNodes(root,-Infinity)
function goodNodes(root,max){
    let count=0;
    good(root,max);
    console.log(count)
    function good(root,max){
        if(root==null){
            return;
        }
        if(root.data>=max){
            count++;
        }
        
        good(root.left,Math.max(root.data,max))
        good(root.right,Math.max(root.data,max))
    }
}
console.log(lowestCommonAncestor(root,78,64))
function lowestCommonAncestor(root,p,q){
    if(root==null){
        return null
    }
    if(root.data==p || root.data==q){
        return root
    }
   let left=lowestCommonAncestor(root.left,p,q);
    let right=lowestCommonAncestor(root.right,p,q);
    if(left!=null && right!=null){
        return root;
    }
    else if(left!=null){
        return left
    }
    else if(right!=null){
        return right;
    }
    else{
        return null;
    }
}
console.log(findPath(root,6,[root.data]))
function findPath(root,target,arr){
    if(root==null){
        
        return false;
    }
    if(root.data==target){
           return true;
    }
    if(root.left!=null){
    arr.push(root.left.data);
    
    if(findPath(root.left,target,arr)){
   
    return arr
    
    }
    arr.pop()
    }
    
    if(root.right!=null){
    arr.push(root.right.data)
    
 
 if(findPath(root.right,target,arr)){
   
    
      return arr;
 }

}
return false;

}