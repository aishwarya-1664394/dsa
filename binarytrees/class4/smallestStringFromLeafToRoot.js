class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
let arr=[1,2,3,4,5,6]
let root=constructTree(arr);
function constructTree(arr){
let root=new Node(arr[0]);
let queue=[root];
let i=1;
while(queue.length!=0 && i<arr.length){
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
smallestLeafToRoot(root)
function smallestLeafToRoot(root){
    let queue=[[root,String.fromCharCode(root.data+97)]];
    let res="";
    let j=1;
    while(queue.length!=0){
        let size=queue.length;
        for(let i=0;i<size;i++){
            let [curr,val]=queue.shift();
            console.log(curr,val)
            if(curr.left==null && curr.right==null){
               
                if(res=="" || val<res){
                    
                    res=val
                }
             
            }
            if(curr.left!=null){
                queue.push([curr.left,String.fromCharCode(97+curr.left.data)+val])
            }
            j++;
             if(curr.right!=null){
                queue.push([curr.right,String.fromCharCode(97+curr.right.data)+val])
            }
            j++;
        }
    }
    console.log(res)
}
maximumProSplittedTree(root)
function maximumProSplittedTree(root){
    let maxP=0;
   let totalsum=0
     totalsum=maxProduct(root);
    maxProduct(root);
    console.log(maxP)
    function maxProduct(root){
        if(root==null){
            return 0
        }
        let leftSum=maxProduct(root.left);
        let rightSum=maxProduct(root.right);
        let subtree=leftSum+rightSum+root.data;
        let remaining=totalsum-subtree;
        maxP=Math.max(maxP,remaining*subtree)
        return leftSum+rightSum+root.data;

    }
}