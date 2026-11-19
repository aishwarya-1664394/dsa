class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}
let arr=[1,1,0,1,1,0,1,0]
let root=constructTree(arr);
console.log(root);
levelOrder(root)
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
maxSum(root)
function maxSum(root){
   let max=-Infinity;
   maxSumRootToLeaf(root,0);
   console.log(max)
function maxSumRootToLeaf(root,sum){

    if(root.left==null && root.right==null){
        sum=sum+root.data;
        max=Math.max(sum,max);
        return;
    }
    sum=sum+root.data;
    if(root.left!=null){
    maxSumRootToLeaf(root.left,sum);
    }
    if(root.right){
    maxSumRootToLeaf(root.right,sum);
    }

}
}
console.log(completenessBinaryTree(root))
function completenessBinaryTree(root){
    let queue=[root];
    let nullfound=false;
    while(queue.length!=0){
        let curr=queue.shift();
        if(curr==null){
            nullfound=true
        }
        else{
            if(nullfound==true){
                   return "not a cbt"
            }
            else{
                queue.push(curr.left);
                queue.push(curr.right)
            }
        }
    }
    return "complete binary tree"
}
removeLeaf(root)
function removeLeaf(root){
    let map=new Map();
    remove(root);
    function remove(root){
        if(root==null){
            return 0;
        }
        let lh=remove(root.left);
        let rh=remove(root.right);
        let height=1+Math.max(lh,rh);
        if(map.has(height)){
           
            map.get(height).push(root.data);
        }
        else{
            map.set(height,[]);
            map.get(height).push(root.data);
            
        }
        return height;
    }
    console.log(map)
}
root=binaryTreePruning(root);
levelOrder(root)
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
function binaryTreePruning(root){
    
    if(root.left==null && root.right==null){
        if(root.data==0){
            return null
        }
        else{
            return root;
        }
    }
    if(root.left!=null){
    root.left=binaryTreePruning(root.left);
    }
    if(root.right!=null){
    root.right=binaryTreePruning(root.right);
    }
    
    return root

}