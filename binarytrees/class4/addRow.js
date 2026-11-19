class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
let arr=[3,5,6,8,2,45,null,16,7];
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
 //console.log(root);
root=addRow(root,3,14);
levelOrder(root);
function levelOrder(root1){
    let queue=[root1];
    let ans=[];
    let level=[]
    while(queue.length!=0){
        let size=queue.length;
       
         level=[]
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
    console.log(ans);
     console.log(level)
}
function addRow(root,depth,val){
    if(depth==1){
        let newroot=new Node(val);
        newroot.left=newroot;
        return newroot
    }
   return add(root,depth,val,1) 
    function add(root,depth,val,curr){
        if(root==null){
            return null
        }
        if(curr==depth-1){
            let leftitem=root.left;
            let rightitem=root.right;
            root.left=new Node(val);
            root.right=new Node(val);
            root.left.left=leftitem;
            root.right.right=rightitem;
            return root;
        }
           root.left= add(root.left,depth,val,curr+1);
           root.right= add(root.right,depth,val,curr+1);
           return root
    }

}