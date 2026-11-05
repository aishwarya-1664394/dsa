let arr=[2,3,6,8,1,9,4];
let stack=[];
nextGreater(arr,stack)
function nextGreater(arr,stack){
let nge=[];
for(let i=arr.length-1;i>=0;i--){
    if(stack.length==0){
        nge[i]=-1;
        stack.push(arr[i])
    }
    else{
        if(stack[stack.length-1]>arr[i])
        {
            nge[i]=stack[stack.length-1];
            stack.push(arr[i])
        }
        else{
            while(stack[stack.length-1]<=arr[i]){
                stack.pop();

            }
             if(stack.length==0)
                {
                  nge[i]=-1;
                  stack.push(arr[i])
                }
             else
                {
                  nge[i]=stack[stack.length-1];
                  stack.push(arr[i])
                }
            }
        }
}
console.log(nge)
}
previousGreatest(arr,stack)
function previousGreatest(arr,stack){
    let pge=[];
    for(let i=0;i<arr.length;i++){
        if(stack.length==0){
            pge[i]=-1;
            stack.push(arr[i])
        }
        else{
            if(stack[stack.length-1]>arr[i]){
                pge[i]=stack[stack.length-1];
                stack.push(arr[i])
            }
            else{
                while(stack[stack.length-1]<=arr[i]){
                    stack.pop()
                }
                if(stack.length==0){
                    pge[i]=-1;
                    stack.push(arr[i])
                 }
                 else{
                    pge[i]=stack[stack.length-1];
                stack.push(arr[i])
                 }

                
            }
        }
    }
    console.log(pge)
}
arr=[4,5,2,10,8];
nextSmallest(arr,[])
function nextSmallest(arr,stack){
    let nse=[];
    for(let i=arr.length-1;i>=0;i--){
        if(stack.length==0){
            nse[i]=-1;
            stack.push(arr[i])
        }
        else{
            if(stack[stack.length-1]<arr[i]){
                nse[i]=stack[stack.length-1];
                stack.push(arr[i])
            }
            else{
                while(stack[stack.length-1]>=arr[i]){
                    stack.pop()
                }
                if(stack.length==0){
                    nse[i]=-1;
                    stack.push(arr[i])
                }
                else{
                nse[i]=stack[stack.length-1];
                stack.push(arr[i]);
                }      
               
        }
    }

}
console.log(nse)
}
previousSmallest(arr,[])
function previousSmallest(arr,stack){
    let pse=[];
    for(let i=0;i<arr.length;i++){         //arr=[4,5,2,10,8];
         if(stack.length==0){
            pse[i]=-1;
            stack.push(arr[i])
         }
         else{
            if(stack[stack.length-1]<arr[i]){
                pse[i]=stack[stack.length-1];
                stack.push(arr[i])
            }
            else{
                while(stack[stack.length-1]>=arr[i]){
                    stack.pop()
                }
                if(stack.length==0){
                     pse[i]=-1;
                     stack.push(arr[i])
                }
                else{
                       pse[i]=stack[stack.length-1];
                stack.push(arr[i])
                }
            }
         }
    }
    console.log(pse)
}