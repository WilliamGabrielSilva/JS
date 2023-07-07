let num = [1,2,3,4,5,6,7,8,10]
let c = 0


/*for(let c = 0; c < num.length; c++){
    console.log(num[c])
}*/

/*while(c < num.length){
    console.log(num[c])

    c++
}*/

/*do{
    console.log(num[c])
    c++
} while(c < num.length)*/

for(let c in num){
    console.log(num[c])
}

console.log(num.indexOf(7))