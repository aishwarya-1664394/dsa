infix="(A+B)*(C-D)/E";
ans=[];
stack=[];
infix=reverse(infix.split(""));
console.log("befor",infix);
arr=infix.split("")
for(let i=0;i<arr.length;i++){
    if(arr[i]=="("){
        arr[i]=")"
    }
    else if(arr[i]==")"){
        arr[i]="("
    }
}
infix=arr.join("")
console.log("after",infix)
for(let i=0;i<infix.length;i++){
    if((infix[i]>="a" && infix[i]<="z" )|| (infix[i]>="A" && infix[i]<="Z" )){
        ans.push(infix[i])
    }
    else if(infix[i]=="("){
        stack.push("(")
    }
    else if(infix[i]==")"){
        while(stack.length!=0 && stack[stack.length-1]!="(" ){
            ans.push(stack[stack.length-1]);
            stack.pop()
        }
       stack.pop()
    }

    else {
        if(infix[i]=="^"){
            while(stack.length!=0 && (precedence(infix[i])<=precedence(stack[stack.length-1])) && stack[stack.length-1]!="("){
            ans.push(stack[stack.length-1]);
            stack.pop()
        }
        stack.push(infix[i]);
        }
        else{
        while(stack.length!=0 && (precedence(infix[i])<precedence(stack[stack.length-1])) && stack[stack.length-1]!="("){
            ans.push(stack[stack.length-1]);
            stack.pop()
        }
        stack.push(infix[i]);
    }

    }
    // console.log("stack",stack);
    // console.log(ans)


}
while(stack.length!=0){
     ans.push(stack[stack.length-1]);
      stack.pop();
}
//ans.reverse()
console.log("ans",ans.reverse().join(""))
function precedence(ch){
    if(ch=="^"){
        return 3
    }
    else if(ch=="*" || ch=="/"){
        return 2
    }
    else if(ch=="+" || ch=="-"){
        return 1
    }
}
function reverse(exp){
    
    let left=0;
    let right=exp.length-1;
    while(left<=right){
        [exp[left],exp[right]]=[exp[right],exp[left]];
        left++;
        right--;
    }
    
    return exp.join("")
  
}
let postfix="AB-DE+F*/";
stack=[]
for(let i=0;i<postfix.length;i++){
 if((postfix[i]>="a" && postfix[i]<="z") || (postfix[i]>="A" && postfix[i]<="Z")){
    stack.push(postfix[i])
 }
 else{
    let top1=stack.pop();
    let top2=stack.pop();
    str="("+top2+postfix[i]+top1+")";
    stack.push(str)
 }
// console.log(stack);
}
let prefix="*+PQ-MN";
stack=[]
for(let i=prefix.length-1;i>=0;i--){
 if((prefix[i]>="a" && prefix[i]<="z") || (prefix[i]>="A" && prefix[i]<="Z")){
    stack.push(prefix[i])
 }
 else{
    let top1=stack.pop();
    let top2=stack.pop();
    str="("+top1+prefix[i]+top2+")";
    stack.push(str)
 }
// console.log(stack);
}
postfix="AB-DE+F*/";
stack=[];
for(let i=0;i<postfix;i++){
if((postfix[i]>="a" && postfix[i]<="z") || (postfix[i]>="A" && postfix[i]<="Z")){
    stack.push(postfix[i])
 }
 else{
 top1=stack.pop();
 top2=stack.pop();
 stack.push(postfix[i]+top2+top1)
 console.log(stack);
 }
}
console.log(stack);