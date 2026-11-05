class Node{
    constructor(data,next){
        this.data=data;
        this.next=next||null;
    }
}
let arr=[9,9];
let head=convertToLL(arr);
function convertToLL(arr){
    let head=new Node(arr[0],null);
    let temp=head;
    for(let i=1;i<arr.length;i++){
        let newNode=new Node(arr[i],null);
        temp.next=newNode;
        temp=newNode
    }
    return head;
}
//traversal(head)
function traversal(head){
    let temp=head;
    while(temp!=null){
        console.log(temp.data);
        temp=temp.next;
    }
}
//head=rotate(head,2);
//traversal(head)
function rotate(head,k){
    let fast=head;
    for(let i=1;i<=k;i++){
        fast=fast.next;
    }
    let slow=head;
    while(fast.next!=null){
      fast=fast.next;
      slow=slow.next;
    }
    let newHead=slow.next;
    slow.next=null;
    fast.next=head;
    return newHead;
}
console.log("***************")
//head=swapNodes(head);
//traversal(head)
function swapNodes(head){
    let temp1=head;
    let newHead=head.next;
    let temp2;
    let prev=null
    while(temp1!=null && temp1.next!=null){
        temp2=temp1.next;
        let nextpair=temp2.next;
        temp1.next=temp2.next;
        temp2.next=temp1;
        if(prev!=null){
            prev.next=temp2;
        }
        prev=temp1
        temp1=nextpair;
    }
    return newHead;
}

head=add1(head)
function add1(head){
    let carry=addHelper(head);
    if(carry==1){
        let newNode=new Node(1,head);
        head=newNode;
        return head;
    }
    return head;
} 
traversal(head);
function addHelper(temp){
    if(temp==null){
        return 1;
    }
    let carry=addHelper(temp.next);
    temp.data=temp.data+carry;
    if(temp.data>=10){
        temp.data=0;
        return 1
    }
    return 0
}
console.log("AAAAAAAAAA")
arr=[1,4,3,2,5,2];
head=convertToLL(arr);
head=partitionList(head,3);
traversal(head)
function partitionList(head,pivot){
    let lessHead=new Node(-1,null);
    let less=lessHead
    let equalHead=new Node(-1,null);
    let equal=equalHead
    let greaterHead=new Node(-1,null);
    let greater=greaterHead
    let temp=head;
    while(temp!=null){
        if(temp.data<pivot){
            less.next=temp;
            less=less.next

        }
       
        else{
            greater.next=temp;
            greater=greater.next
        }
        temp=temp.next;
    }
    less.next=greaterHead.next;
    greater.next=null
    return lessHead.next
}