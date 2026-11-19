class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
let arr=[3,4,7,1,8,6,78,23,null,80,65];
let root=convertarrTotree(arr);
function convertarrTotree(arr){
    let root=new Node(arr[0]);
    let i=1;
    let queue=[root]
    while(i<arr.length && queue.length!=0){
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
maxNodeLevel(root)
function maxNodeLevel(root){
    let map=new Map();
     maxlevel(root,0)
    function maxlevel(root,level){
        if(root==null){
            return [];
        }
        if(map.has(level)){
            map.set(level,Math.max(map.get(level),root.data))
        }
        else{
            map.set(level,root.data)
        }
        maxlevel(root.left,level+1);
        maxlevel(root.right,level+1)

    }
    console.log([...map.values()])
}
let target=searchTarget(root,7);
console.log(target);
timeToBurnAllnodes(root,target)
function timeToBurnAllnodes(root,target){
    let map=new Map();
    map=childToParentMap(root);
  
    let visited=new Map();

    visited.set(target,1)
   let queue=[target];
   let time=0
    while(queue.length!=0){
        let size=queue.length;
        let flag=0
        for(let i=0;i<size;i++){
            let curr=queue.shift();
            if(curr.left!=null && !visited.has(curr.left)){
                flag=1
                visited.set(curr.left,1);
                queue.push(curr.left)
            }
            if(curr.right!=null && !visited.has(curr.right)){
                flag=1
                visited.set(curr.right,1);
                queue.push(curr.right)
            }
            if(map.has(curr) && !visited.has(map.get(curr))){
                flag=1
                visited.set(map.get(curr),1);
                queue.push(map.get(curr))
            }
        }
        if(flag==0){
            break;
        }
        time++

    }
    console.log(time)
}

function childToParentMap(root){
    if(root==null){
        return null;
    }
    let queue=[root];
    let map=new Map()
    while(queue.length!=0){
        let size=queue.length;
        for(let i=0;i<size;i++){
            let curr=queue.shift();
            if(curr.left!=null){
                map.set(curr.left,curr);
                queue.push(curr.left)
            }
            if(curr.right!=null){
                map.set(curr.right,curr);
                queue.push(curr.right)
            }
        }
    }
   return map
}
function searchTarget(root,target){
    if(root==null){
        return null
    }
    if(root.data==target){
        return root
    }
    let left=searchTarget(root.left,target);
    if(left!=null){
        return left
    }
     let right=searchTarget(root.right,target);
    if(right!=null){
        return right
    }
    return null;

}
