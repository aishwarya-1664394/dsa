class Node{
    constructor(data,next){
        this.data=data;
        this.next=next||null;
    }
}
let arr=[2,3,4,67,21,7,7,89];
let head=arrToCycleLL(arr,3);
function arrToCycleLL(arr,k){
    let head=new Node(arr[0],null);
    let temp=head;
    let cyclenode;
    for(let i=1;i<arr.length;i++){
        let newNode=new Node(arr[i],null);
        temp.next=newNode;
        if(i==k){
          cyclenode=newNode;
        }
        temp=temp.next;
    }
    temp.next=cyclenode;
    return head;
}
console.log(detectCycle(head))
function detectCycle(head){
    let set=new Set();
    let temp=head;
    while(temp!=null){
        if(set.has(temp)){
            return temp
        }
        else{
            set.add(temp)
        }
        temp=temp.next
    }
    return false
}
console.log(cyclelength(head))
function cyclelength(head){
    let map=new Map();
    let temp=head;
    let timer=0;
    while(temp!=null){
        if(map.has(temp)){
            timer++;
            return timer-map.get(temp)
        }
        else{
            timer++;
            map.set(temp,timer)
        }
        temp=temp.next;
    }
    return false
}
