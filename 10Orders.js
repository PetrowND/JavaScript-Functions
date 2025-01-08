function orders(item,count){
    let price=0;
    if(item=='coffee'){
        price = 1.5;
    }else if(item=='water'){
        price=1;
    }else if(item=='coke'){
        price=1.4;
    }else if(item=='snacks'){
        price=2;
    }

    console.log((price*count).toFixed(2));
}

orders('water',5);