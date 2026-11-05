class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
let arr=[1,2,3,4,null,null,5];
let root=convertTotree(arr);
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
maximumWidth(root)
function maximumWidth(root){
    let queue=[[root,0]];
    let max=0
    while(queue.length!=0){
        let size=queue.length;
        let firstIndex=queue[0][1];
        let last=queue[queue.length-1][1];
        for(let i=0;i<size;i++){
            let [node,index]=queue.shift();
           
            if(node.left!=null){
                queue.push([node.left,2*index+1])
            }
            if(node.right!=null){
                queue.push([node.right,2*index+2])
            }
        }
        max=Math.max(last-firstIndex+1,max);

    }
    console.log(max)
}
rootToLeafNodes(root)
function rootToLeafNodes(root){
    let ans=[];
    rootToleaf(root,[root.data])
    function rootToleaf(root,arr){
          
          if(root.left==null && root.right==null){
           console.log(arr);
           
            return;
          }
          if(root.left!=null){
            arr.push(root.left.data)
          rootToleaf(root.left,arr)
          arr.pop()
          }
          if(root.right!=null){
           
            arr.push(root.right.data)
            rootToleaf(root.right,arr)
            arr.pop()
          }
          
    }
   
}
pathSum(root,7)
function pathSum(root,target){
  
    console.log(rootToleaf(root,target))
    function rootToleaf(root,target){
          
          if(root.left==null && root.right==null){
           if((target-root.data)==0){
            return true;
           }
           else{
            return false;
           }
          }
          let left;
          let right;
          if(root.left!=null){
            
          left=rootToleaf(root.left,target-root.data)
          
          }
          if(root.right!=null){
           
           right= rootToleaf(root.right,target-root.data)
         
          }
          return left || right
    }
   
}
console.log(maxPathSum(root,0))
function maxPathSum(root,maxi){
    if(root==null){
        return 0;
    }
    leftmax=Math.max(maxPathSum(root.left),0);
    rightmax=Math.max(maxPathSum(root.right),0);
   maxi=Math.max(leftmax+rightmax+root.data,maxi)
    return Math.max(leftmax,rightmax)+root.data;
}
// function maxPathSum(root) {
//     let maxi = -Infinity;

//     function solve(root) {
//         if (root == null) return 0;

//         let leftmax = Math.max(solve(root.left), 0);
//         let rightmax = Math.max(solve(root.right), 0);

//         maxi = Math.max(leftmax + rightmax + root.data, maxi);

//         return Math.max(leftmax, rightmax) + root.data;
//     }

//     solve(root);
//     return maxi;
// }

// console.log(maxPathSum(root));