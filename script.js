let p = 40000;
let r = 0.077217345;
let n =1;
let t=3;

let A = p*(1+(r/n))**(n*t);

console.log("The component intrest after " + t + " years is : " + Math.round(A));