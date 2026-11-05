let arr=[100,80,60,70,60,75,85];
stockSpan(arr)
function stockSpan(arr){
let stack=[];
let pge=[];
for(let i=0;i<arr.length;i++){
    let span=1;
    if(stack.length==0){
        pge[i]=span;
        stack.push(i);
    }
    else{
        if(arr[stack[stack.length-1]]>arr[i]){
            pge[i]=span;
            stack.push(i)

        }
        else{
            while(stack.length!=0  && (arr[stack[stack.length-1]]<=arr[i]) ){
                
                stack.pop()
            }
            if(stack.length==0){
                pge[i]=i+1
            }
            else{
                pge[i]=i-stack[stack.length-1]
            }
            stack.push(i)
        }
    }
}
console.log(pge)
}
let temp=[73, 74, 75, 71, 69, 72, 76, 73];
nextTempDays(temp)
function nextTempDays(temp){
let stack=[];
let nge=[];
for(let i=temp.length-1;i>=0;i--){
    if(stack.length==0){
        nge[i]=0;
        stack.push(i)
    }
    else{
        if(temp[stack[stack.length-1]]>temp[i]){
            nge[i]=stack[stack.length-1]-i
            stack.push(i)
        }
        else{
            while(stack.length!=0 && temp[stack[stack.length-1]]<=temp[i]){
               stack.pop() 
            }
            if(stack.length==0){
                       nge[i]=0;
                      stack.push(i)
            }
            else{
                 nge[i]=stack[stack.length-1]-i
            stack.push(i)
            }
        }
    }
}
console.log(nge);
}
nums2=[1,3,4,2];
stack=[];
    let nge=new Map();
    for(let i=nums2.length-1;i>=0;i--){
        if(stack.length==0){
          nge.set(nums2[i],-1);
          stack.push(nums2[i])
        }
        else{
            if(stack[stack.length-1]>nums2[i]){
                nge.set(nums2[i],stack[stack.length-1]);
                stack.push(nums2[i]);
            }
            else{
                while(stack.length!=0 && stack[stack.length-1]<=nums2[i] ){
                    stack.pop()
                }
                 if(stack.length==0){
                    nge.set(nums2[i],-1);
                  stack.push(nums2[i])
                }
                 else{
                nge.set(nums2[i],stack[stack.length-1]);
                stack.push(nums2[i]);
                }
        }

    }
    console.log(nge)
}