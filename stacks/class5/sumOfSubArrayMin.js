let arr=[3,6,2,4,1,9];
sumSubarraymin(arr)
function sumSubarraymin(arr){
let nse=nextSmaller(arr);
//console.log(nse)
let pse=preSmallerEqual(arr);
console.log(pse)
function nextSmaller(arr){
    let stack=[];
    let nse=[];
    for(let i=arr.length-1;i>=0;i--){
        while(stack.length!=0 && arr[stack[stack.length-1]]>=arr[i]){
                  stack.pop()
        }
        if(stack.length==0){
            nse[i]=arr.length;
        }
        else{
            nse[i]=stack[stack.length-1];
        }
        stack.push(i)

    }
    return nse;
}
function preSmallerEqual(arr){
    let stack=[];
    let pse=[];
    for(let i=0;i<arr.length;i++){
        while(stack.length!=0 && arr[stack[stack.length-1]]>arr[i]){
                  stack.pop()
        }
        if(stack.length==0){
            pse[i]=-1;
        }
        else{
            pse[i]=stack[stack.length-1];
        }
        stack.push(i)

    }
    return pse;
}
let sum=0
for(let i=0;i<arr.length;i++){
    sum=sum+arr[i]*(i-pse[i])*(nse[i]-i)

}
console.log(sum);
return sum;
}

nums=[3,5,0,3,4];
console.log(pattern132(nums))
function pattern132(nums){
    let nge=nge1(nums);
    let nse=nse1(nums);
    console.log(nge);
    console.log(nse)
    for(let i=0;i<nums.length;i++){
        if(nge[i]==-1){
            continue;
        }
        else{
            let a=nge[i] 
            console.log(nums[i])
            console.log(nums[a])
            console.log(nums[nse[a]])
            if((nse[a]!=-1) ){
                return true
            }
        }
    }
    return false;
    function nge1(nums){
        let stack=[];
        let nge=[];
        for(let i=nums.length-1;i>=0;i--){
            if(stack.length==0){
                nge[i]=-1;
                stack.push(i)
            }
            else{
                if(nums[stack[stack.length-1]]>nums[i]){
                    nge[i]=stack[stack.length-1];
                    stack.push(i)
                }
                else{
                    while(stack.length!=0 && nums[stack[stack.length-1]]<=nums[i]){
                        stack.pop();
                        
                    }
                    if(stack.length==0){
                         nge[i]=-1;
                         stack.push(i)
                    }
                    else{
                        nge[i]=stack[stack.length-1];
                        stack.push(i);
                    }
                }
            }
        }
        return nge;
    }
    function nse1(nums){
        let stack=[];
        let nse=[];
        for(let i=nums.length-1;i>=0;i--){
            if(stack.length==0){
                nse[i]=-1;
                stack.push(i)
            }
            else{
                if(nums[stack[stack.length-1]]<nums[i]){
                    nse[i]=stack[stack.length-1];
                    stack.push(i)
                }
                else{
                    while(stack.length!=0 && nums[stack[stack.length-1]]>=nums[i]){
                        stack.pop();
                    }
                    if(stack.length==0){
                        nse[i]=-1;
                        stack.push(i)
                    }
                    else{
                         nse[i]=stack[stack.length-1];
                         stack.push(i)
                    }
                }
            }

        }
        return nse;
    }
}
arr=[3,6,2,4,1,9];
let largest=sumOfSubArrayMax(arr);
let smallest=sumSubarraymin(arr);
console.log(largest-smallest)
function sumOfSubArrayMax(arr){
    let nge=nextgreater(arr);
    let pge=previousgreaterEqual(arr);
    let sum=0
    console.log(":pge",pge)
    console.log(":nge",nge)
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]*(i-pge[i])*(nge[i]-i)
    }
    console.log(sum);
    return sum;
    function nextgreater(arr){
        let stack=[];
        let nge=[];
        for(let i=arr.length-1;i>=0;i--){
            if(stack.length==0){
                nge[i]=arr.length;
                stack.push(i)
            }
            else{
                if(arr[stack[stack.length-1]]>arr[i]){
                    nge[i]=stack[stack.length-1];
                    stack.push(i)
                }
                else{
                    while(stack.length!=0 && arr[stack[stack.length-1]]<=arr[i]){
                        stack.pop()
                    }
                    if(stack.length==0){
                     nge[i]=arr.length;
                     stack.push(i)
                    }
                    else{
                         nge[i]=stack[stack.length-1];
                         stack.push(i)
                    }
                    
                }
            }
        }
         return nge;
    }
    function previousgreaterEqual(arr){
         let stack=[];
        let pge=[];
        for(let i=0;i<arr.length;i++){
            if(stack.length==0){
                pge[i]=-1;
                stack.push(i)
            }
            else{
                if(arr[stack[stack.length-1]]>arr[i]){
                    pge[i]=stack[stack.length-1];
                    stack.push(i)
                }
                else{
                    while(stack.length!=0 && arr[stack[stack.length-1]]<=arr[i]){
                        stack.pop()
                    }
                    if(stack.length==0){
                     pge[i]=-1;
                     stack.push(i)
                    }
                    else{
                         pge[i]=stack[stack.length-1];
                         stack.push(i)
                    }
                    
                }
            }
        }
         return pge;
    }


}
