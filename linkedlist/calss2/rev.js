class Node{
    constructor(data,prev,next){
        this.data=data;
        this.prev=prev||null
        this.next=next||null;
    }
}




let arr=[1,2,3,4,5];
let head=convertToDLL(arr)
function convertToDLL(arr){
    let head=new Node(arr[0],null,null);
    current=head;
    for(let i=1;i<arr.length;i++){
        let newNode=new Node(arr[i],current,null);
        current.next=newNode;
        current=newNode;
    }
   // console.log(". ",current.data)
    return head
}
head=revDLL(head)
function revDLL(head){
    let current=head;
    while(current!=null){
        last=current.prev;
        current.prev=current.next;;
        current.next=last;
        current=current.prev
    }
    head=last.prev
    
    let temp=head;
    while(temp!=null){
        console.log(temp.data);
        temp=temp.next
    
}
return head
}