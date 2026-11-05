postfix="AB-DE+F*/";
stack=[];
for(let i=0;i<postfix.length;i++){
if((postfix[i]>="a" && postfix[i]<="z") || (postfix[i]>="A" && postfix[i]<="Z")){
    stack.push(postfix[i])
 }
 else{
 top1=stack.pop();
 top2=stack.pop();
 stack.push(postfix[i]+top2+top1)
 
 }
}
console.log(stack);
prefix="/-AB*+DEF";
stack=[];
for(let i=prefix.length-1;i>=0;i--){
    if((prefix[i]>="a" && prefix[i]<="z") || (prefix[i]>="A" && prefix[i]<="Z")){
    stack.push(prefix[i])
 }
 else{
    top1=stack.pop();
 top2=stack.pop();
 stack.push(top1+top2+prefix[i])
 }
}
console.log(stack)