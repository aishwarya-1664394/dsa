let str="abcdef";
let arr=[];
top=-1;
for(let i=0;i<str.length;i++){
    arr.push(str[i])
        top++;
    
}
ans=""
while(top!=-1){
   ans=ans+arr.pop();
   top--;
}
console.log(ans);
console.log(validParenthesis("([])"))
function validParenthesis(s){
    let stack=[];
    let i=0;
    while(i<s.length){
        if(s[i]=="{" || s[i]=="[" || s[i]=="("){
            stack.push(s[i])
        }
        else{
            if(((stack[stack.length-1]=="{") && s[i]=="}") || ((stack[stack.length-1]=="(") && s[i]==")")|| ((stack[stack.length-1]=="[") && s[i]=="]")){
                stack.pop()
            }
            else{
                return false
            }
        }
        i++;
    }
    return stack.length==0
}
removeAdjacentDuplicates("abbba")
function removeAdjacentDuplicates(s){
    let stack=[];
    let i=0
    while(i<s.length){
        if(stack.length>0 && stack[stack.length-1]==s[i]){
            stack.pop()
        }
        else{
            stack.push(s[i])
        }
        //console.log(stack)
        i++;
    }
    console.log(stack.join(""))
}
nextGreaterEle([4,5,2,10,8])
function nextGreaterEle(arr){
    let ans=[];
    for(let i=0;i<arr.length;i++){
        let greater=-1;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]>arr[i]){
                greater=arr[j];
                break;
            }
        }
        ans.push(greater)
    }
    console.log(ans)
}
nextGreaterStack([4,5,2,10,8])
function nextGreaterStack(arr){
    let stack=[]
    let ans=[]
    for(let i=arr.length-1;i>=0;i--){
        if(stack.length==0){
            ans[i]=-1
        }
        else{
            while(stack.length>0 &&  stack[stack.length-1]<=arr[i]){
                stack.pop()
            }
            if(stack.length==0){
                ans[i]=-1
            }
            else{
            ans[i]=stack[stack.length-1]
            }
        }
            stack.push(arr[i])

        
    }
    console.log(ans);
}