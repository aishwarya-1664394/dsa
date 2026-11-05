class Node{
    constructor(data,next){
        this.data=data;
        this.next=next||null
    }
}





let arr=[2,3,4,6,7,8];
let head=convertToLL(arr);
function convertToLL(arr){
    let head=new Node(arr[0]);
     let temp=head
     for(let i=1;i<arr.length;i++){
        
        let newNode=new Node(arr[i],null);
        temp.next=newNode;
        temp=newNode;
     }
     return head;
     
}
//traversal(head)
function traversal(head){
    temp=head;
    while(temp!=null){
        console.log(".     ",temp.data);
        temp=temp.next
    }
}
head=segerate012(head);
traversal(head)
function segerate012(head){
    let zeroHead=new Node(-1);
    let oneHead=new Node(-1);
    let twoHead=new Node(-1);
    let zero=zeroHead;
    let one=oneHead;
    let two=twoHead;
    let temp=head;
    while(temp!=null){
        if(temp.data==0){
            zero.next=temp;
            zero=zero.next;
        }
       else if(temp.data==1){
            one.next=temp;
            one=one.next;
        }
        else{
            two.next=temp;
            two=two.next;
        }
        temp=temp.next;
    }
    zero.next=oneHead.next?oneHead.next:twoHead.next;
    one.next=twoHead.next;
    two.next=null;
 let newHead=zeroHead.next;
 return newHead;

}
console.log("))))))))))")
//head=swapPairs(head);
//traversal(head)
function swapPairs(head) {
    if(head==null || head.next==null){
        return head
    }
    let first=head;
    let newhead=first.next;
    let prev=null
   
    while(first!=null && first.next!=null){
        
        
        second=first.next;
        nextpair=second.next
        
        second.next=first;
        first.next=nextpair
        if(prev!=null){
            prev.next=second
        }
        prev=first;
        first=nextpair
        

    }
    return newhead
}
console.log("**********")
swapValues(head,1)
function swapValues(head,k){
    let temp=head;
    for(let i=1;i<k;i++){
        temp=temp.next;
    }
    let val1=temp.data;
   // console.log(val1);
   let fast=head;
   for(let i=1;i<=k;i++){
        fast=fast.next;
    }
    let slow=head;
    while(fast!=null){
        slow=slow.next;
        fast=fast.next
    }
    let temp1=slow.data;
slow.data=temp.data;
temp.data=temp1;
    
   traversal(head)
}
