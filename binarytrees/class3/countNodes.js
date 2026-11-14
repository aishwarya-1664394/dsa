class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
let arr=[2,4,5,61,7,null,8,9,10];
let root=convertTotree(arr);
function convertTotree(arr){
    let root=new Node(arr[0]);
    let queue=[root];
    let i=1;
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
console.log(distanceRootToTarget(root,10))
function distanceRootToTarget(root,target){
    return distance(root,target,0)
    function distance(root,target,level){
    if(root==null){
        return -1
    }
    if(root.data==target){
         return level;
    }
    let left=distance(root.left,target,level+1);
    if(left!=-1){
        return left;
    }
    let right=distance(root.right,target,level+1);
    if(right!=-1){
        return right;
    }
    return -1
}
}
console.log(LowestCommonAncestors(root,7,9))
function LowestCommonAncestors(root,p,q){
    if(root==null || root.data==p || root.data==q){
        return root
    }
    let left=LowestCommonAncestors(root.left,p,q)
    let right=LowestCommonAncestors(root.right,p,q)
    if(left==null && right==null){
        return null;
    }
    else if(left!=null && right!=null){
        return root
    }
    else if(left!=null){
        return left
    }
    else if(right!=null){
        return right
    }

}
console.log(distanceBetweenTwoNode(root,9,8))
function distanceBetweenTwoNode(root,p,q){
    let lca=LowestCommonAncestors(root,p,q);
    let d1=distanceRootToTarget(lca,p);
    let d2=distanceRootToTarget(lca,q);
    return d1+d2
}
console.log(".      ",kthAncestor(root,2,7))
function kthAncestor(root,k,target){
    if(root==null){
        return -1
    }
    if(root.data==target){
        return 0;
    }
    let left=kthAncestor(root.left,k,target);
    if(left!=-1){
        left++;
        if(k==left){
            return root
        }
        return left
    }
     
    let right=kthAncestor(root.right,k,target);
    if(right!=-1){
        right++;
        if(k==right){
            return root
        }
        return right
    }
    return -1

}
