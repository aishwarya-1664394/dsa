class Node{
    constructor(data,next){
        this.data=data;
        this.next=next||null;
    }
}
let arr=[4,5];
let head=convertToLL(arr)
function convertToLL(arr){
    let head=new Node(arr[0]);
    let temp=head;
    for(let i=1;i<arr.length;i++){
        let newNode=new Node(arr[i]);
        temp.next=newNode;
        temp=newNode;
    }
    
    return head
}
//traversal(head)
function traversal(head){
    temp=head;
    while(temp!=null){
        console.log(".     ",temp.data);
        temp=temp.next
    }
}
head=posLeft(head,1,2);
traversal(head)
function posLeft(head,left,right){
    let reversehead;
    if(left==right){
        return head
    }
    let prev=null;
    let temp=head;
    for(let i=1;i<left;i++){
        prev=temp;
        temp=temp.next
    }
   let temp1=head
   for(let i=1;i<right;i++){
        
        temp1=temp1.next
    }
    next=temp1.next;
    temp1.next=null;
    reversehead=reverse(temp);
    if(prev==null){
       head=reversehead
    }
  
   else{
   prev.next=reversehead;
   }
   temp.next=next
   return head
}
function reverse(head){
    let temp=head;
    let prev=null;
    let next=null;
    while(temp!=null){
        next=temp.next;
        temp.next=prev;
        prev=temp;
        temp=next;
    }
    return prev;
}