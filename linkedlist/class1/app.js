class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
let arr=[1,5,6,3,4,7,8,14];
let head=convertToLL(arr)
console.log(head.data);
function convertToLL(arr){
    let head=new Node(arr[0]);
    let temp=head;
    for(let i=1;i<arr.length;i++){
        let newNode=new Node(arr[i]);
        temp.next=newNode;
        temp=newNode;
    }
    console.log(temp)
    return head
}
traversal(head)
function traversal(head){
    temp=head;
    while(temp!=null){
        console.log(".     ",temp.data);
        temp=temp.next
    }
}
console.log(countArr(head))
function countArr(head){
    let count=0
   temp=head;
    while(temp!=null){
        count++;
        console.log(temp.data);
        temp=temp.next 
    } 
    return count;
}
searchEle(head,14)
function searchEle(head,value){
    let flag=false;
    let temp=head;
    while(temp!=null){
        if(temp.data==value){
            flag=true;
            break;
        }
        temp=temp.next;
    }
    if(flag==true){
        console.log("present");  
    }
    else{
        console.log("NO")
    }
}
 //head=deleteHead(head);
 //console.log(head.data)
 function deleteHead(head){
    if(head==null){
        return "0 elements"
    }
    head=head.next;
    return head;
 }
 //deleteTail(head)
 function deleteTail(head){
    let temp=head;
    if(head==null){
        console.log("0 ele")
    }  
    else if(head.next==null){
        console.log("1 ele")
    }
    else{
    while(temp.next.next!=null){
        temp=temp.next
    }
    temp.next=null
    console.log(temp.data)     //[1,3,4,7,8]
}
 }
 //deletePos(head,3)
 function deletePos(head,k){
    let count=0;
    temp=head;
    if(head==null){
        return null
     }
     else if(k==1){
        deleteHead(head)
     }
      else{
    while(temp!=null){
        // if(count==k-1){
        //     temp.next=temp.next.next
            
        // }
        count++;
        if(count==k-1){
            temp.next=temp.next.next;
            break;
            
        }
        temp=temp.next;
    }
    if(count<k){
        console.log("can't delete")
    }
}
     traversal(head)

 }
 delEle(head,3)
 function delEle(head,val){
    let temp=head;
    while(temp!=null){
        if(temp.next.data==val){
            temp.next=temp.next.next;
            break;
        }
        temp=temp.next
    }
    traversal(head)
    
 }
 console.log("***************")
head=insertAtHead(head,2)
 function insertAtHead(head,val){
    let temp=head;
    let newNode=new Node(val);
    newNode.next=head;
    head=newNode
   traversal(head)
   return head;
 }
 console.log("***************")
 InsertLast(head);
//  console.log("***************")
 function InsertLast(head){
    let temp=head;
    while(temp.next!=null){
       // console.log(".     ",temp.data);
        temp=temp.next
    }
    let newNode =new Node(13); 
    temp.next=newNode;
    traversal(head)
 }
 console.log("***************")
 traversal(head);
  console.log("***************")
 insertPos(head,45,1)
 function insertPos(head,val,k){
    let temp=head;
    let count=0;
    if(head==null){
        console.log("No ele")
    }
    if(k==1){
        head=insertAtHead(head,val)
    }
     else{
    while(temp!=null){
        count++;
        if(count===k-1){
            let newNode=new Node(val);
            newNode.next=temp.next;
            temp.next=newNode;
            break;
        }
        temp=temp.next;
    }
}
console.log("***************")
    traversal(head)
 }
 head=insetValBefor(head,4)
 function insetValBefor(head,val){
    let temp=head;
    if(head==null){
        return null
    }
    if(head.data==val){
        head=insertAtHead(head);
        return head
    }
    else{
    while(temp.next!=null){
        if(temp.next.data==val){
            let newNode=new Node(0);
            newNode.next=temp.next;
            temp.next=newNode;
            break;
        }
        temp=temp.next
    }
}

console.log("***************")
    traversal(head);
    return head;

 }
