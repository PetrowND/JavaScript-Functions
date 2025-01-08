function repeatString(string,count){
    let result ='';
    for(i=0;i<count;i++){
        result+=string;
    }
    console.log(result);
}

repeatString('abc',3);