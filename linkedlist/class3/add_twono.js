class Node{
    constructor(data,next){
        this.data=data;
        this.next=next||null;
    }
}
let arr=[1,2,3];
let head=convertToLL(arr);
//console.log(head.next)
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
head=reverseAndADD1(head)
function reverseAndADD1(head){
    let temp=head;
    let prev=null;
    let next;
    while(temp!=null){
        next=temp.next;
        temp.next=prev;
        prev=temp;
        temp=next

    }
  head=prev
  //traversal(head)
    temp=head;

    carry=0;
    sum=0;
   while(temp!=null){
    if(temp==head){
        sum=carry+temp.data+1;
    }
    else{
     sum=carry+temp.data;
    }
     if(sum>=10){
        temp.data=sum%10;
        carry=Math.floor(sum/10)
     }
     else{
        temp.data=sum;
        carry=0
     }
     temp=temp.next;
   } 

   //sum=temp.data+carry;
   
   if(carry!=0){
    let newNode=new Node(carry,null);
    temp.next=newNode;
   }
   //traversal(head)
   temp=head;
     prev=null;
    next;
    while(temp!=null){
        next=temp.next;
        temp.next=prev;
        prev=temp;
        temp=next

    }
  head=prev;
  console.log("aaaaa")
  traversal(head);
  return head
}
//console.log("ddddd")
arr1=[1,2,9,8,9];
arr2=[1,9,0,8];
let head1=convertToLL(arr1);
let head2=convertToLL(arr2);
head1=reverse(head1);
head2=reverse(head2);

function reverse(head){
    let temp=head;
    let prev=null;
    let next;
    while(temp!=null){
        next=temp.next;
        temp.next=prev;
        prev=temp;
        temp=next

    }
  head=prev;
  return head;
}
let sumHead=addTwoNum(head1,head2);
sumHead=reverse(sumHead);
traversal(sumHead)
function addTwoNum(head1,head2){
    let temp1=head1;
    let temp2=head2;
    let carry=0;
    let sum=0;
    let dummy=new Node(-1,null);
    let prev=dummy;
    let sumHEAD=dummy;
    while(temp1!=null || temp2!=null){
        sum=carry;
        if(temp1!=null){
            sum=temp1.data+sum;
        }
        if(temp2!=null){
            sum=sum+temp2.data;
        }
        if(sum>=10){
            let newNode=new Node(sum%10,null);
            carry=Math.floor(sum/10);
            prev.next=newNode;
            prev=newNode;
        }
        else{
            let newNode=new Node(sum,null);
            carry=0;
            prev.next=newNode;
            prev=newNode;
        }
        if(temp1!=null){
            temp1=temp1.next
        }
         if(temp2!=null){
            temp2=temp2.next
        }


    }
    if(carry!=0){
        let newNode=new Node(carry,null);
        prev.next=newNode;
        prev=newNode;
    }
    sumHEAD=dummy.next;
    return sumHEAD;
    //traversal(sumHead);
}
let arr3=[2,3,4,6,12,89,90,1567];
let arr4=[1,4,6,8,10];
let head3=convertToLL(arr3);
let head4=convertToLL(arr4);
console.log("**********")
let mergeHead=sortedList(head3,head4);
traversal(mergeHead)
function sortedList(head1,head2){
    let temp1=head1;
    let temp2=head2;

    let dummy=new Node(-1);
    let temp=dummy;
    while(temp1!=null && temp2!=null){
        if(temp1.data<=temp2.data){
            
            temp.next=temp1
            temp1=temp1.next;
        }
        else{
            temp.next=temp2
            temp2=temp2.next
        }
        temp=temp.next
        
    }
    while(temp1!=null){
       temp.next=temp1
            temp1=temp1.next
           temp=temp.next
    }
    while(temp2!=null){
        temp.next=temp2
             temp2=temp2.next
             temp=temp.next
    }
   let sortedhead=dummy.next;
   //traversal(sortedhead);
   return sortedhead

}
