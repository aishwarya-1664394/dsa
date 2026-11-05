class Node{
    constructor(data,prev,next){
        this.data=data;
        this.prev=prev || null;
        this.next=next || null;
    }
}
let arr=[11,23,78,11,90,89,10];
let head=convertToDLL(arr);
console.log(head)
function convertToDLL(arr){
    let head=new Node(arr[0],null,null);
    let temp=head;
    for(let i=1;i<arr.length;i++){
        let newNode=new Node(arr[i],temp,null);
        temp.next=newNode;
        temp=newNode;
    }
    return head
}
//traversal(head)
function traversal(head){
    let temp=head;
    while(temp!=null){
        console.log(temp.data);
        temp=temp.next;
    }
}
removeKey(head,11)
function removeKey(head,key){
    let temp=head;
    let prev=null;
    let newHead;
    while(temp!=null){
        if(temp.data==key){
            if(temp==head){
                head=head.next;
                if(head!=null){
                 head.prev=null;
                }
                //newHead=head;
                
            }
            else if(temp.next==null){
                temp.prev.next=null;
            }
            else{
                prev=temp.prev;
                next=temp.next;
                
                prev.next=next;
                next.prev=prev;
                }
            
        }
        temp=temp.next;
    }
    traversal(head)
    return head;
}
arr2=[1,1,1,2,2,3,3,4,4,4];
head1=convertToDLL(arr2);
removeDuplicates(head1)
function removeDuplicates(head){
    let temp=head;
    while(temp.next!=null){
        if( temp.next!=null && temp.data==temp.next.data ){

           temp.next=temp.next.next;
           if(temp.next!=null){
           temp.next.prev=temp
           }

        }
        else{
            temp=temp.next;
        }
    }
    traversal(head)
}
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
        else if(temp.data==pivot){
            equal.next=temp;
            equal=equal.next
        }
        else{
            greater.next=temp;
            greater=greater.next
        }
        temp=temp.next;
    }
    less.next=equal.next?equalHead.next:greaterHead.next;
    equal.next=greaterHead.next;
    greater.next=null
}
traversal(head);
console.log("7777777777")
swapvalues(head,1)
function swapvalues(head,k){
    let temp=head;
    let count=1;
    let val1
    if(k==1){
        val1=head.data
    }
    else{
    while(temp!=null){
        if((k-1)==count){
            break;
        }
        count++;
        temp=temp.next;
    }
    val1=temp.next.data;
}

    
    let fast=head;
    for(let i=1;i<=k;i++){
        fast=fast.next;
    }
    let slow=head;
    while(fast.next!=null){
        slow=slow.next;
        fast=fast.next;
    }
    let val2=slow.next.data;
    console.log("val2",val2);
    if(k==1){
        slow.next.data=val1;
    temp.data=val2;
    }
    else{
    slow.next.data=val1;
    temp.next.data=val2;
    }
    traversal(head);
}