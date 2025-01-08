function countString(text,word){
    let index =0;
    let counter=0;
    while(text.indexOf(word,index)!==-1){
        counter++;
        index = text.indexOf(word, index) + word.length;
    }

    console.log(counter);
}

countString('a b c d e f a a a a','a');