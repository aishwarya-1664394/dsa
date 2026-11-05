class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}
let arr=[25,9,16,9,null,10,6,null,9,10]
let root=constructTree(arr);
console.log(root)
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
console.log(toCheckChildrenSum(root))
function toCheckChildrenSum(root){
    if(root==null){
        return true;
    }
    if(root.left==null && root.right==null){
        return true;
    }
    let leftdata=0;
    if(root.left!=null){
        leftdata=root.left.data;
    }
    
    let rightdata=0;
    if(root.right!=null){
        rightdata=root.right.data;
    }
    if(root.left!=null || root.right!=null)
    {
           if(root.data!=(leftdata+rightdata))
        {
                  return false;
        }
    
     }
    leftcheck=toCheckChildrenSum(root.left);
    rightcheck=toCheckChildrenSum(root.right);
    return leftcheck && rightcheck;
}
function changeTree(root){
    let child=0;
    if(root==null){
        return;
    }
    if(root.left!=null){
        child=root.left.data
    }
    if(root.right!=null){
        child+=root.right.data
    }
    if(child>=root.data){
        root.data=child
    }
    else{
        if(root.left!=null){
        root.left.data=root.data
    }
     if(root.right!=null){
        root.right.data=root.data
    }
    }
    changeTree(root.left);
    changeTree(root.right);
    let total=0;
    if(root.left!=null){
        total=root.left.data
    }
    if(root.right!=null){
        total+=root.right.data
    }
    if(root.left!=null || root.right!=null){
    root.data=total;
    }

}