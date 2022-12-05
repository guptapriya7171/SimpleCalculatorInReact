function math(a,b){
    let sum  = a+b;
    let setSum  = (z) =>{
        sum = z;
    }
    return [sum, setSum];
}

let [x,y] = math.sum(6,5);
console.log(x,y);