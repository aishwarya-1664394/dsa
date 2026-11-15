class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
let arr=[5,4,8,11,null,13,4,7,2,null,null,5,1];
let root=convertTotree(arr);
console.log(root)
function convertTotree(arr){
    let root=new Node(arr[0]);
    let i=1;
    let queue=[root];
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
maximumSum(root)
function maximumSum(root){
    let ans1=[];
    let ans2=[]
    let j=0
    let queue=[root];
    while(queue.length!=0){
        let size=queue.length;
        let level=[];
        for(let i=0;i<size;i++){
            let curr=queue.shift();
            if(curr.left!=null){
                queue.push(curr.left)
            }
            if(curr.right!=null){
                queue.push(curr.right)
            }
            level.push(curr.data);
          
        }
        if(j%2==0){
            ans1.push(level)
        }
        else{
            ans2.push(level)
        }
        j++;
    }
    ans1=ans1.flat(Infinity);
    ans2=ans2.flat(Infinity)
   let maxSum=0;
   let sum=0;
   let leveleven=[];
   let levelodd=[]
   for(let i=0;i<ans1.length;i++){
    if((sum+ans1[i])>sum){
       sum=sum+ans1[i];
       leveleven.push(ans1[i])
    }

   }
   console.log(sum)
   let sum1=0;
   for(let i=0;i<ans2.length;i++){
    if((sum1+ans2[i])>sum1){
       sum1=sum1+ans2[i];
       levelodd.push(ans2[i])
    }

   }
   console.log(sum1);
   console.log(Math.max(sum,sum1));
   if(Math.max(sum,sum1)==sum){
    console.log(leveleven)
   }
   else{
    console.log(levelodd)
   }
}

console.log(rootTotarget(root,15))
function rootTotarget(root,target){
    if(root==null){
        return false
    }
    if(root.data==target){
        return [root.data];
    }
    let leftsearch=rootTotarget(root.left,target);
    if(leftsearch){
        leftsearch.unshift(root.data)
        return leftsearch
    }
    let rightsearch=rootTotarget(root.right,target);
    if(rightsearch){
        rightsearch.unshift(root.data)
        return rightsearch
    }
    return false

}
rootToleaf(root)
function rootToleaf(root){
    all(root,[])
    function all(root,arr){

   if(root.left==null && root.right==null){
    arr.push(root.data)
    console.log(". ",arr)
    arr.pop()
    return;

   } 
   arr.push(root.data)
   if(root.left!=null){
   all(root.left,arr);  
   }
   
   if(root.right!=null){
   all(root.right,arr);
    
   }
   arr.pop();
   return;
  
}

}
console.log(pathSumExists(root,22))
function pathSumExists(root,target){
    if(root.left==null && root.right==null){
        if((target-root.data)==0){
            return true
        }
        else{
            return false
        }
    }
    let left
    if(root.left!=null){
        left=pathSumExists(root.left,target-root.data);
        if(left==true){
            return true
        }
       
    }
    let right
    if(root.right!=null){
        right=pathSumExists(root.right,target-root.data);
        if(right==true){
            return true
        }
        
    }
    return left || right
}
rootToleafAll(root,22)
function rootToleafAll(root,target){
    All(root,target,[])
    function All(root,target,arr){
        if(root.left==null && root.right==null){
            if((target-root.data)==0){
                arr.push(root.data);
                console.log(arr);
                arr.pop();
                return;
            }
            else{
                return;
            }
        }
        arr.push(root.data);
        let left
        if(root.left!=null){
          All(root.left,target-root.data,arr)
        }
        if(root.right!=null){
          All(root.right,target-root.data,arr)
        }
        arr.pop()
    }
}