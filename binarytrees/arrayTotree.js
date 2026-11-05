class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
arr=[1,2,3,4,5,6];
let root=arrToBinaryTree(arr);
console.log(root.left)
inorder(root)
function inorder(root){
    if(root==null){
        return;
    }
    inorder(root.left);
    console.log(root.data);
    inorder(root.right);
}
function arrToBinaryTree(arr){
    if(arr.length==0 || arr[0]==null){
        return null;
    }
    let root=new Node(arr[0])
    let queue=[root];
    let i=1;
    while(i<arr.length){
      let  current=queue.shift();
      if(arr[i]!=null){
        current.left=new Node(arr[i])
        queue.push(current.left)

      }
      i++;
      if(i<arr.length){
        if(arr[i]!=null){
        current.right=new Node(arr[i]);
        queue.push(current.right);
        }
         i++;
      }
     
    }
    return root;
}
treeToarray(root)
function treeToarray(root){
    let arr=[];
    let queue=[root];
    while(queue.length!=0){
        current=queue[0];
        if(current.left!=null){
            queue.push(current.left)

        }
        if(current.right!=null){
            queue.push(current.right)

        }
         arr.push(queue.shift().data)
    }
    // console.log("********")
    // console.log(arr)
}
IterativePre(root)
function IterativePre(root){
    let stack=[root];
    while(stack.length!=0){
        let popele=stack.pop()
        console.log(".    ",popele.data);
        if(popele.right!=null){
            stack.push(popele.right)
        }
         if(popele.left!=null){
            stack.push(popele.left)
        }

    }
   
    
}
IterativeInorder(root)
function IterativeInorder(root){
     let stack=[]
     let inorder=[]
     let node=root;
     while(true){
        if(node!=null){
            stack.push(node);
            node=node.left

        }
        else{
            if(stack.length==0){
                break;
            }
            let popele=stack.pop();
            inorder.push(popele.data);
            node=popele.right;
            
        }
     }
     console.log(inorder)

}
