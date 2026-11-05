// Infix to postfix
let infix="(A+B)*(C-D)/E";
let ans=[];
let stack=[];

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
        
        while(stack.length!=0 && precedence(infix[i])<=precedence(stack[stack.length-1]) && stack[stack.length-1]!="("){
            ans.push(stack[stack.length-1]);
            stack.pop()
        }
        stack.push(infix[i]);
    }

    }
    // console.log("stack",stack);
    // console.log(ans)



while(stack.length!=0){
     ans.push(stack[stack.length-1]);
      stack.pop();
}
console.log(ans)
function precedence(ch){
    if(ch=="^"){
        return 3
    }
    else if(ch=="*" || ch=="/"){
        return 2
    }
    else{
        return 1
    }
}
// infix to prefix
infix="(A+B)*(C-D)/E";
ans=[];
stack=[];
infix=reverse(infix.split(""));

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
    for(let i=0;i<exp.length;i++){
        if(exp[i]==")"){
            exp[i]="("
        }
        if(exp[i]=="("){
            exp[i]=")"
        }
    }
    return exp.join("")
  
}