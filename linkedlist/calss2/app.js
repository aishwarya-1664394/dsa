let arr=[4,6,8,7,9]; 
class Node{
    constructor(data,next,back){
        this.data=data;
        this.next=next;
        this.back=back ;
    }
    
} 
let head=new Node(arr[0],null,null );
head=convertArrToDLL(head,arr);
console.log(head.data)
function convertArrToDLL(head,arr){
    let prev=head;
    for(let i=1;i<arr.length;i++){
        let newNode=new Node(arr[i],null,prev);
        prev.next=newNode;
        prev=newNode;
    }
    return head
}
//head=deleteHead(head)
//console.log(head.data)
function deleteHead(head){
     let prev=head;
     if(head==null){
        return "no ele";
     }
    
        head=head.next;
        head.back=null;
        prev.next=null;
     
     return head;
}
console.log(head)
//head=deleteTail(head)
//console.log(head);
function deleteTail(head){

    let tail=head;
    if(head==null || head.next==null){
        return null;
    }
    while(tail.next!=null){
        
           tail=tail.next;
        }
       prev=tail.back;
       
       prev.next=null;
       tail.back=null;
    
    console.log(".  ",prev.next);
    return head
}
function traversal(head){
    let temp=head;
    while(temp!=null){
        console.log(temp.data);
        temp=temp.next
    }
}
traversal(head);
console.log("*********");
head=DeleteAtK(head,1)
function DeleteAtK(head,k){
    let tail=head;
    count=0
     
    while(tail!=null){
    count++;
    
    if(count==k){
        prev=tail.back;
        next=tail.next
        // prev.next=tail.next
        // if(next!=null){
        // next.back=prev;
        // }

        // tail.next=null;
        // tail.back=null
        break;

    }
    tail=tail.next;
    }
    if(prev==null && next==null){
        return null
    }
    else if(prev==null){
        head=deleteHead(head)
    }
    else if(next==null){
        deleteTail(head)
    }
    else{
        prev.next= next;
        next.back=prev;
        tail.next=null;
        tail.back=null

    }
    traversal(head)
    return head;
}
console.log("***********")
DeleteNode(head.next)
function DeleteNode(temp){
    let  prev=temp.back;
    let next=temp.next;
    if(next==null){
        prev.next=null;
        return
    }
    prev.next=next;
    next.back=prev; 
    temp.next=null;
    temp.next=null;
}
traversal(head)
//console.log(head)
console.log("************")
head=Headbefore(head,23)
function Headbefore(head,val){
    let newNode=new Node(val,head,null);
    head.back=newNode;
    head=newNode;
    return head
}
traversal(head);
//console.log(head);
console.log("***********")
head=TailBefore(head,78)
function TailBefore(head,val){
    if(head.next==null){
        return Headbefore(head,val)
    }
    let tail=head;
    while(tail.next!=null){
        tail=tail.next;
    }
    prev=tail.back;
    let newNode=new Node(val,tail,prev);
    prev.next=newNode;
    tail.back=newNode;
    traversal(head);
    return head;
}
console.log("************")
head=InsertAtK(head,2,65);
traversal(head)
function InsertAtK(head,k,val){
    let tail=head;
    let count=0;
    if(k==1){
         return Headbefore(head,val)
    }
    while(tail!=null){
        count++;
        if(count==k){
            break;
        }
        tail=tail.next;
    }
    prev=tail.back;
   
    let newNode=new Node(val,tail,prev);
    prev.next=newNode;
    tail.back=newNode;
    //traversal(head);
    return head
}
console.log("***********")
InsertNode(head.next,179)
function InsertNode(node1,val){
    let prev=node1.back;
    let newNode=new Node(val,node1,prev);
    prev.next=newNode;
    node1.back=newNode;
    prev.next=newNode;
    traversal(head)


}