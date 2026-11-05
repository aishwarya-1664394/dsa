let postfix="84/32*-";
stack=[];
for(let i=0;i<postfix.length;i++){
    if(postfix[i]>="0" && postfix[i]<="9"){
        stack.push(Number(postfix[i]))
    }
    else{
        let top1=stack.pop();
        let top2=stack.pop();
        if(postfix[i]=="+"){
            stack.push(top2+top1)
        }
        else if(postfix[i]=="-"){
            stack.push(top2-top1)
        }
         else if(postfix[i]=="*"){
            stack.push(top2*top1)
        }
        else if(postfix[i]=="/"){
            stack.push(top2/top1)
        }
    }
  
}
  console.log(...stack)
let prefix="-/84*32";
stack=[]
for(let i=prefix.length-1;i>=0;i--){
    if(prefix[i]>="0" && prefix[i]<="9"){
        stack.push(Number(prefix[i]))
    }
    else{
        let top1=stack.pop();
        let top2=stack.pop();
        if(prefix[i]=="+"){
            stack.push(top1+top2)
        }
        else if(prefix[i]=="-"){
            stack.push(top1-top2)
        }
         else if(prefix[i]=="*"){
            stack.push(top1*top2)
        }
        else if(prefix[i]=="/"){
            stack.push(top1/top2)
        }
    }
    console.log(stack)
}
//console.log(stack)