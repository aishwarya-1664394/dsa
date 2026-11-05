class Node{
    constructor(data,left,right){
        this.data=data;
        this.left=null;
         this.right=null;

    }
}
let arr=[1,3,4,null,5,9,null,7,8,9,10];
let root=convertTotree(arr);
//console.log(root.left.right)
function convertTotree(arr){
    let root=new Node(arr[0]);
    let queue=[root];
    let i=1;
    while(i<arr.length && queue.length!=0){
        current=queue.shift();
        if(arr[i]!=null){
            current.left=new Node(arr[i]);
            queue.push(current.left)
        }
        i++;
        if(i<arr.length){
             if(arr[i]!=null){
            current.right=new Node(arr[i]);
            queue.push(current.right)
        }
        }
        i++;
    }
    return root;
}
console.log(countNodes(root))
function countNodes(root){
    if(root==null){
        return 0;
    }
    let countleft=countNodes(root.left);
    let countright=countNodes(root.right);
    return countleft+countright+1;
}
console.log(findMax(root))
function findMax(root){
    if(root==null){
        return -Infinity;
    }
    let maxleft=findMax(root.left);
    let maxright=findMax(root.right);
    return Math.max(maxleft,maxright,root.data);
}
console.log(findMin(root))
function findMin(root){
    if(root==null){
        return Infinity;
    }
    let minleft=findMin(root.left);
    let minright=findMin(root.right);
    return Math.min(minleft,minright,root.data);
}
console.log(searchTree(root,11));
function searchTree(root,target){
    if(root==null){
        return false;
    }
    if(root.data==target){
        return true;
    }
    let leftsearch=searchTree(root.left,target);
    let rightsearch=searchTree(root.right,target);
    return leftsearch==true|| rightsearch==true
}
countNodesAtLevel(root,3)
function countNodesAtLevel(root,k){
    
    if(k==0){
        return 1;
    }
    else{
        let count=0;
     countNodesAt(root,k,0);
       console.log(count)

       function countNodesAt(root,k,t){
        if(root==null){
                return;
            }
        if(k==t){
            if(root==null){
                return;
            }
            else{
                count++;
                return;
            }
        }
        countNodesAt(root.left,k,t+1);
       countNodesAt(root.right,k,t+1);

       }

    }
}
numberOfLeafNodes(root)
function numberOfLeafNodes(root){
    let count=0;
    if(root!=null){
      numberOfLeaf(root)
      console.log(" no. of Leaf nodes ",count)
        function numberOfLeaf(root){
            if(root==null){
                return;
            }
            if(root.left==null && root.right==null){
              
                count++;
                return;
            }
         
            numberOfLeaf(root.left);
            
           
            numberOfLeaf(root.right);
           
        }

    }
    else{
        console.log("0")
    }

}
numberOfnonLeafNodes(root)
function numberOfnonLeafNodes(root){
    let count=0;
    if(root!=null){
      numberOfnonLeaf(root)
      console.log("    ",count)
        function numberOfnonLeaf(root){
            if(root==null){
                return;
            }
            if(root.left!=null || root.right!=null){
              
                count++;
                
            }
            if(root.left!=null){
            numberOfnonLeaf(root.left);
            }
           if(root.right!=null){
            numberOfnonLeaf(root.right);
            }
        }

    }
    else{
        console.log("0")
    }

}
console.log(sumOfNodes(root))
function sumOfNodes(root){
    if(root==null){
        return 0;
    }
    let leftsum=sumOfNodes(root.left);
    let rightsum=sumOfNodes(root.right);
    return leftsum+rightsum+root.data
}