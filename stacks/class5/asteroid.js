let arr=[4,7,1,1,2,-3,-7,17,-16];
let stack=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]>0){
        stack.push(arr[i])
    } 
    else{
        
            
        while(stack.length!=0 && stack[stack.length-1]>0 && stack[stack.length-1]<Math.abs(arr[i])){
            stack.pop()
            
        }
        if(stack.length!=0 && stack[stack.length-1]==Math.abs(arr[i])){
                   stack.pop()
            }
        else if(stack.length==0 || stack[stack.length-1]<0){
            stack.push(arr[i])
        }
            
    }
    console.log(stack)
}
console.log(stack);