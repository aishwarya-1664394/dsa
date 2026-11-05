class Node{
    constructor(data,next){
        this.data=data;
        this.next=next||null;

    }
}
let arr=[1,2,3,2,1];
let head=converToLL(arr);
function converToLL(arr){
    let head=new Node(arr[0]);
    let temp=head;
    for(let i=1;i<arr.length;i++){
        let newNode=new Node(arr[i],null);
        temp.next=newNode;
        temp=newNode
    }
    return head;
}
traversal(head)
function traversal(head){
    let temp=head;
    while(temp!=null){
        console.log("data",temp.data);
        temp=temp.next;
    }
}
findMax(head)
function findMax(head){
    let temp=head;
    let max=-Infinity;
    while(temp!=null){
        if(temp.data>max){
            max=temp.data
        }
        temp=temp.next;
    }
    console.log(max)
}
findMin(head)
function findMin(head){
    let temp=head;
    let min=Infinity;
    while(temp!=null){
        if(temp.data<min){
            min=temp.data
        }
        temp=temp.next;
    }
    console.log(min)
}
//head=InsertAtHead(head,45);
traversal(head)
function InsertAtHead(head,val){
    if(head==null){
        let newNode=new Node(val);
        return newNode
    }
    //temp=head;
    let newNode=new Node(val,head);
    head=newNode;
    return head
}
function InsertAtHead(head,val){
    if(head==null){
        let newNode=new Node(val);
        return newNode
    }
    //temp=head;
    let newNode=new Node(val,head);
    head=newNode;
    return head
}
console.log("**********");
//head=reverse(head);
//traversal(head)
function reverse(head){
    let temp=head;
    let prev=null;
    let next;
    while(temp!=null){
        next=temp.next;
        temp.next=prev;
        prev=temp;
        temp=next;
    }
    return prev;
}

linkedList(head)
function linkedList(head){
    let fast=head;
    let slow=head;
    while(fast!=null && fast.next!=null){
        slow=slow.next;
        fast=fast.next.next;
    }
    console.log("mid",slow.data);
}
NthnodeFromEnd(head,4)
function NthnodeFromEnd(head,k){
    let fast=head;
    let slow=head;
    for(let i=1;i<=k;i++){
        fast=fast.next;
    }
    if(fast==null){
        return slow;
    }
    while(fast!=null){
        slow=slow.next;
        fast=fast.next
    }
console.log(slow.data)
}
console.log("*************")
palindrome(head)
function palindrome(head){
    let fast=head;
    let slow=head;
    while(fast.next!=null && fast.next.next!=null){
        slow=slow.next;
        fast=fast.next.next;
    }
    //console.log(slow.next)
    
    temp=slow.next;
    let next;
    let prev=null
    while(temp!=null){
        next=temp.next;
        temp.next=prev;
        prev=temp;
        temp=next;
    }
    let first=head;
    let second=prev;
    let newHead=prev;
    traversal(prev)
    let flag=true
    while(second!=null){
        if(first.data!=second.data){
            flag=false;
            break;
        }
      first=first.next;
      second=second.next;
    } 
    if(flag==true){
        console.log("palindrome")
    }
    else{
        console.log("not")
    }
    
}
arr=[1,2,2,3,4,5,5];
head=converToLL(arr);
traversal(head);
let count=countOcc(head,8);
console.log(count);
function countOcc(head,val){
    let temp=head;
    let count=0
    while(temp!=null){
        if(temp.data==val){
            count++;
        }
        temp=temp.next;
    }
    return count;
}
console.log("************* ") 
removeDuplicatesorted(head)
function removeDuplicatesorted(head){
let temp=head;
while(temp.next!=null){
    if(temp.data==temp.next.data){
        temp.next=temp.next.next
    }
    else{
        temp=temp.next;
    }
    
}
traversal(head)
}
console.log("************")
arr=[2,3,4,1,4,2,6,4];
head=converToLL(arr);
head=removeDuplicatesUnsorted(head);
traversal(head)
function removeDuplicatesUnsorted(head){
    let temp=head;
    let set=new Set();
    let prev;
    while(temp!=null){
        if(set.has(temp.data)){
           prev.next=temp.next;
        }
        else{
            set.add(temp.data)
            prev=temp;
        }
        temp=temp.next
    }
    return head;
}