class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
let arr=[1,2,3,null,4];
let root=convertTotree(arr);
console.log(root)
function convertTotree(arr){
    let root=new Node(arr[0]);
    let queue=[root];
    let i=1;
   while(i<arr.length && queue.length>0){
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
    return root
}
console.log(isSymmetric(root))
function isSymmetric(root){
    return isMirror(root.left,root.right)
    function isMirror(left,right){
        if(left==null && right==null){
            return true
        }
        if(left==null || right==null){
            return false;
        }
        if(left.data!=right.data){
            return false;
        }
        return isMirror(left.left,right.right) && isMirror(left.right,right.left)

    }
}
let root1=convertTotree([1,2,2,3,4,4,3])
console.log(isSame(root,root1))
function isSame(p,q){
    if(p==null && q==null){
        return true;
    }
    if(p==null || q==null){
        return false;
    }
    if(p.data!=q.data){
        return false;
    }
    return isSame(p.left,q.left) && isSame(p.right,q.right) 
}
console.log(".   ",toCheckFullBinaryTree(root))
function toCheckFullBinaryTree(root){
    if(root.left==null && root.right==null){
        return true
    }
    if(root.left==null || root.right==null){
        return false
    }
    return toCheckFullBinaryTree(root.left) && toCheckFullBinaryTree(root.right)
}
//root=convertTotree([3,4,5,7,7,8])
let total=countNodes(root)
function countNodes(root){
    if(root==null){
        return 0;
    }
    
   let leftcount=countNodes(root.left);
  let rightcount= countNodes(root.right);
  return leftcount+rightcount+1;

}
console.log(checkCompleteBinaryTree(root,total));
function checkCompleteBinaryTree(root,total){
   let queue=[[root,0]];
   let ans=[]
   while(queue.length!=0){
    let size=queue.length;
    let level=[]
    for(let i=0;i<size;i++){
        let [curr,index]=queue.shift();
        if(curr.left!=null){
        queue.push([curr.left,2*index+1])
        if((2*index+1)>=total){
            return false
        }
        }
        if(curr.right!=null){
        queue.push([curr.right,2*index+2]);
        if((2*index+2)>=total){
            return false
        }
        }
        level.push([curr,index])
    }
    ans.push(level)
   } 
   console.log(ans);
   return true;
}
