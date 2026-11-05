let num="00001";
let k=3;
let stack=[]
for(let i=0;i<num.length;++i){
    if(stack.length!=0 && k>0 && stack[stack.length-1]>num[i]){
        k=k-1;
        stack.pop()

    }
    
 stack.push(num[i])
    
}
while(k>0){
    stack.pop();
    k--;
}
while(stack.length!=0 && stack[0]=="0"){
    stack.shift()
}
if(stack.length==0){
    console.log("0")
}
else{
console.log(stack);
}
arr=[2,1,5,6,2,3];
LargestRect(arr)
function LargestRect(arr){
    let pse=previousSmaller(arr);
    let nse=nextSmaller(arr);
    let maxArea=-Infinity;
    for(let i=0;i<arr.length;i++){
        let area=arr[i]*(nse[i]-pse[i]-1);
        maxArea=Math.max(area,maxArea)
    }
    console.log(maxArea)
    function previousSmaller(arr){
        let stack=[];
        let pse=[];
        for(let i=0;i<arr.length;i++){
            if(stack.length==0){
                pse[i]=-1;
                stack.push(i)
            }
            else{
                if(arr[stack[stack.length-1]]<arr[i]){

                    pse.push(stack[stack.length-1])
                    stack.push(i)
                }
                else{
                    while(arr[stack[stack.length-1]]>=arr[i]){
                        stack.pop()
                    }
                     if(stack.length==0){
                          pse[i]=-1;
                         stack.push(i)
                    }
                    else{
                        pse.push(stack[stack.length-1])
                        stack.push(i)
                    }
                }
            }
        }
        return pse;
    }
    function nextSmaller(arr){
        let stack=[];
        let nse=[];

        for(let i=arr.length-1;i>=0;i--){
            if(stack.length==0){
                stack.push(i);
                nse[i]=arr.length;
            }
            else{
                if(arr[stack[stack.length-1]]<arr[i]){
                    nse[i]=stack[stack.length-1];
                    stack.push(i)
                }
                else{
                    while(arr[stack[stack.length-1]]>=arr[i]){
                        stack.pop()
                    }
                     if(stack.length==0){
                      stack.push(i);
                      nse[i]=arr.length;
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
OptimizedRect(arr)
function OptimizedRect(arr){
    let pse=[];
    let nse=[];
   let stack=[];
   let maxArea=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(stack.length==0){
            pse[i]=-1;
            stack.push(i)
        }
        else{
            if(arr[stack[stack.length-1]]<arr[i]){
                pse[i]=stack[stack.length-1];
                stack.push(i)
            }
            else{
                while(stack.length!=0 && arr[stack[stack.length-1]]>=arr[i] ){
                    
                    let left = pse[stack[stack.length-1]];
                    let width = i - left - 1;
                    let idx = stack.pop();
                    let height = arr[idx];
                    let area = width * height;
                    maxArea=Math.max(area,maxArea);
                    
                   
                }
                if(stack.length==0){
                  pse[i]=-1;
                  stack.push(i)
                }
                else{
                    pse[i]=stack[stack.length-1];
                    stack.push(i)
                }
            }
        }

    }
    console.log(stack);
    for(let i=0;i<stack.length;i++){
        let left=pse[stack[i]];
        let area=(arr.length-left-1)*arr[stack[i]];
        console.log(area)
        maxArea=Math.max(area,maxArea)
    }
    console.log(maxArea)
}
let str="(()())(()())";
stack=[];
let count=0;
for(let i=0;i<str.length;i++){
    if(str[i]=="("){
        stack.push("(")
    }
    else{
        stack.pop();
        if(stack.length==0){

        }
        else{
            count++;
        }

    }
}
line="";
while(count--){
    line+="()"

}
console.log(line);