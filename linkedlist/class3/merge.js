class Node{
    constructor(data,next){
        this.data=data;
        this.next=next || null;
    }
}


function convertToLL(arr){
    let head=new Node(arr[0],null);
    let temp=head;
    for(let i=1;i<arr.length;i++){
        let newNode=new Node(arr[i],null);
        temp.next=newNode;
        temp=newNode;
    }
    console.log(temp)
    return head
}

function traversal(head){
    temp=head;
    while(temp!=null){
        console.log(".     ",temp.data);
        temp=temp.next
    }
}







let arr3=[2,3,4,6,12,89,90,1567];
let arr4=[1,4,6,8,10];
let head3=convertToLL(arr3);
let head4=convertToLL(arr4);

let mergeHead=sortedList(head3,head4);
//traversal(mergeHead)
function sortedList(head1,head2){
    let temp1=head1;
    let temp2=head2;

    let dummy=new Node(-1,null);
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
    }
    while(temp2!=null){
        temp.next=temp2
             temp2=temp2.next
    }
   let sortedhead=dummy.next;
   traversal(sortedhead);
   return sortedhead

}
arr=[2,3,4,5,78,90,3,12,15]
headcycle=arrToCycle(arr,3)
function arrToCycle(arr,k){
    let head=new Node(arr[0],null);
    let temp=head;
    let cycleNde;
    for(let i=1;i<arr.length;i++){
        let newNode=new Node(arr[i],null);
        temp.next=newNode;
        
        if(i==k){
            cycleNde=newNode
        }
       temp=newNode;
    }
  temp.next=cycleNde
    return head;
}
console.log(detectCycle(headcycle));
function detectCycle(headcycle){
    let fast=headcycle;
    let slow=headcycle;
    while(fast!=null && fast.next!=null){
        slow=slow.next;
        fast=fast.next.next;
        if(fast==slow){
            return lenOfCycle(slow,fast)
        }
    }
    return false

}
function lenOfCycle(slow,fast){
    let count=1;
    fast=fast.next;
    while(slow!=fast){
        count++;
        fast=fast.next;
    }
    return count;
}
let cyclestart=detectCycle1(headcycle)
function detectCycle1(headcycle){
    let fast=headcycle;
    let slow=headcycle;
    while(fast!=null && fast.next!=null){
        slow=slow.next;
        fast=fast.next.next;
        if(fast==slow){
            return startOfCycle(slow,fast,headcycle)
        }
    }
    return false

}
function startOfCycle(slow,fast,headcycle){
     slow=headcycle;
    while(slow!=fast){
        slow=slow.next;
        fast=fast.next
    }
    return slow
}
headcycle=removeOfCycle(cyclestart,headcycle);
traversal(headcycle)
function removeOfCycle(slow,headcycle){
    let temp=cyclestart
    while(temp.next!=cyclestart){
       temp=temp.next
    }
    temp.next=null;
    return headcycle;
}

