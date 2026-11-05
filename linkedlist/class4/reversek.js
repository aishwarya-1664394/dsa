class Node{
    constructor(data,next){
        this.data=data;
        this.next=next||null;

    }
}
let arr=[1,2,3,4,5,6,7,8];
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
//traversal(head)
function traversal(head){
    let temp=head;
    while(temp!=null){
        console.log("data",temp.data);
        temp=temp.next;
    }
}
//head=reverse3(head)
function reverse3(head){
    let newHead=head.next.next;
    let first=head;
    let prev=null;
    while(first!=null && first.next!=null && first.next.next!=null){
        let second=first.next;
        let third=second.next;
        let nextpair=third.next;
        third.next=second;
        second.next=first;
        first.next=nextpair
        if(prev!=null){
            prev.next=third;
        }
        prev=first;
        first=nextpair;
    }
   traversal(newHead);
   return newHead

}
//findKthNode(head,3)
function findKthNode(head,k){
    let temp=head;
    let i=1
    while(i<k && temp!=null){
        temp=temp.next;
        i++;
    }
    return temp;
}
head=reversek(head,4);
traversal(head)
function reversek(head,k){
    let temp=head;
    let prevnode=null;
    let nextnode;
    while(temp!=null){
        let kthnode=findKthNode(temp,k);
        if(kthnode==null){
           if(prevnode!=null){
            prevnode.next=temp;
                
           }
           break;
        }
        
            nextnode=kthnode.next;
            kthnode.next=null
           
           newHead= reverse(temp);


        
        if(temp==head){
            head=kthnode;

        }
        else{
            prevnode.next=newHead
        }
        temp.next=nextnode;
         prevnode=temp
        temp=temp.next;

    }
    return head
}
function reverse(head){
    let temp=head;
    let next=null;
    let prev=null;
    while(temp!=null){
        next=temp.next;
        temp.next=prev;
        prev=temp;
        temp=next;
    }
    return prev
}
console.log("********")
let arr2=[4,7,1,0,8,90,14];
let head2=converToLL(arr2);
middleofLL(head2)
function middleofLL(head){
    let fast=head;
    let slow=head;
    while(fast.next!=null && fast.next.next!=null){
        slow=slow.next;
        fast=fast.next.next;
    }
    right=slow.next;
    slow.next=null
    left=head;
    console.log(left);
    console.log(right)
}