class QuadraticEquation {
    a;
    b;
    c;
    constructor(a,b,c) {
        this.a=a;
        this.b=b;
        this.c=c
    }
    getA(){
        return this.a
    }
    getB(){
        return this.b
    }
    getC(){
        return this.c
    }
    getDiscriminant(){
        return (this.b*this.b - (4* this.a * this.c))
    }
    getRoot1(){
        return ((-this.b + Math.pow(this.getDiscriminant(),0.5))/(2*this.a))
    }
    getRoot2(){
        return ((-this.b - Math.pow(this.getDiscriminant(),0.5))/(2*this.a))
    }
}
function checkDiscriminant(discriminant) {
    if (discriminant.getDiscriminant()>=0){
        console.log(`x1 : ${discriminant.getRoot1()}  x2: ${discriminant.getRoot2()}`)
    }else if (discriminant.getDiscriminant()===0){
        console.log(`x1 = x2 = ${discriminant.getRoot1()}`)
    }else console.log('The equation has no roots')
}

let num = new QuadraticEquation(3,2,1)
checkDiscriminant(num)
// console.log(num.getDiscriminant())
// console.log(num.getRoot1())
// console.log(num.getRoot2())