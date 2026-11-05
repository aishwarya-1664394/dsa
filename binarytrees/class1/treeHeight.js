class Node{
    constructor(data,left,right){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
let arr=[1,2,3,4,5,6,null,null,null,7,8];
let root=convertarrTotree(arr);
console.log(root.right)
function convertarrTotree(arr){
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
    return root;
}
console.log(maxHeight(root));
function maxHeight(root){
    if(root==null){
        return 0;
    }
    let leftHeight=maxHeight(root.left);
    let rightHeight=maxHeight(root.right);
    return Math.max(leftHeight,rightHeight)+1;
}
let flag=balancedTree(root);
if(flag==-1){
    console.log("false")
}
else{
    console.log("true")
}
function balancedTree(root){
    if(root==null){
        return 0;
    }
    let leftHeight=balancedTree(root.left);
    let rightHeight=balancedTree(root.right);
    if(leftHeight==-1 || rightHeight==-1){
        return -1;
    }
    if(Math.abs(leftHeight-rightHeight)>1){
        return -1;
    }
    return Math.max(leftHeight,rightHeight)+1;
}
console.log(maxDiameter(root,0))
function maxDiameter(root,dia){
    if(root==null){
        return 0;

    }
    let leftHeight=maxDiameter(root.left,dia);
     let rightHeight=maxDiameter(root.right,dia);
     dia=Math.max(dia,leftHeight+rightHeight);
     return Math.max(leftHeight,rightHeight)+1

}

invertTree(root);
console.log(root.left)
function invertTree(root){
    if(root==null){
        return null;
    }
    let temp=root.left;
    root.left=root.right;
    root.right=temp;
    invertTree(root.left);
    invertTree(root.right);

}
let temp=[2,4,5];
let root2=convertarrTotree(temp);
console.log(root2)
console.log("       ",isSubTreeSame(root,root2));

// function isIdentical(root1,root2){
//     if(root2==null){
//         return true;
//     }
//     if(root1==null){
//         return false;
//     }
    
//     if( root1!=null && root2!=null && root1.data==root2.data ){
//           if(isSubTreeSame(root1,root2)){
//             return true
//           }
//          function isSubTreeSame(root1,root2){
//             if(root1==null && root2==null){
//             return true;
//         }
//         if(root1==null || root2==null){
//             return false;
//         }
//         if(root1.data!=root2.data){
//             return false;
//         }
//         let leftsee=isSubTreeSame(root1.left,root2.left);
//         let rightsee=isSubTreeSame(root1.right,root2.right);
//         return leftsee && rightsee;
//          }
         
//     }
//     let lt=isIdentical(root1.left,root2);
//     let rt=isIdentical(root1.right,root2);
//     return lt || rt
// }
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
    
        if (isSubTreeSame(root1, root2)) {
            return true;
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