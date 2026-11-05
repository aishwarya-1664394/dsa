class minStack{
    constructor(){
        this.stack=[];
        this.minStack=[]
    }
    push(x){
        this.stack.push(x);
        if(this.minStack.length==0 || x<=this.minStack[this.minStack.length-1]){
            this.minStack.push(x)
        }
    }
    pop(){
        poppedvalue=this.stack.pop();
        if(poppedvalue==this.minStack[this.minStack.length-1]){
            this.minStack.pop()
        }

    }
    top(){
        return this.stack[this.stack.length-1]
    }
    getMin(){
        return this.minStack[this.minStack.length - 1];
    }
}
class MinStack {
    constructor() {
        this.stack=[];
        this.min=Infinity;
   
    }
    
    push(val) {
        if(this.stack.length==0){
            this.stack.push(val);
            this.min=val;

        }
        else{
            if(val<=this.min){
                
               let newval=2*val-this.min;
               this.min=val;
               
               this.stack.push(newval)
            }
            else{
            this.stack.push(val)
            }
        }
 
    }

    pop() {
        if(this.stack.length==0){
            return null;
        }
        let popele=this.stack[this.stack.length-1];
        if(popele<this.min){
            this.min=2*this.min-popele;
            this.stack.pop()

        }
        else{
            this.stack.pop();
        }
   
    }

    top() {
        if(this.stack.length==0){
            return null;
        }
        let x=this.stack[this.stack.length-1];
        if(x<this.min){
            return this.min
        }
        return x;
        
    }

    getMin() {
      return this.min;
    }
}