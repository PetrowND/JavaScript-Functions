function reverseAnArrayOfNumbers(n,input){
    let newArr =input.slice(0,n);
    let finalArr = newArr.reverse(); 
    console.log(finalArr.join(' '))
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])