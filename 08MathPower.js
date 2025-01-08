function mathPower(number,power){
    let finalNumber=1;
    for(let i=1;i<=power;i++){
        finalNumber*=number
    }

    console.log(finalNumber)
}

console.log (mathPower(2,3))