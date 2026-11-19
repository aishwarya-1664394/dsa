class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
let arr=[1,2,null,2,null,2];
let root=convertarrTotree(arr);
function convertarrTotree(arr){
    let root=new Node(arr[0]);
    let i=1;
    let queue=[root];
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
        i++;
        }
    }
    return root;
}
//maxNodeRootToPath(root)
function maxNodeRootToPath(root){
    if(root==null){
        return;
    }
    let maxarr=[];
    max1(root,-Infinity);
    console.log(maxarr)
    function max1(root,max){
        if(root.left==null && root.right==null){
            maxarr.push(Math.max(root.data,max));
            return;
        }
        if(root.left!=null){
            max1(root.left,Math.max(root.data,max))
        }
         if(root.right!=null){
            max1(root.right,Math.max(root.data,max))
        }
    }
   
}
root=deleteLeaf(root,2);
levelOrder(root);
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
function deleteLeaf(root,target){
    if(root==null){
        return null;
    }
    if(root.left==null && root.right==null){
        if(root.data==target){
            return null;
        }
        else{
            return root;
        }
    }
    if(root.left!=null){
        root.left=deleteLeaf(root.left,target);
        if(root.left==null && root.right==null){
            if(root.data==target){
                return null
            }
            else{
                return root
            }
        }
    }
    if(root.right!=null){
        root.right=deleteLeaf(root.right,target);
        if(root.left==null && root.right==null){
            if(root.data==target){
                return null
            }
            else{
                return root
            }
        }
    }
    return root
}