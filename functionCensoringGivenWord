function censoredWord(text, word) {
    
    function repeat(word) {
        let result = '';
        for (let i = 0; i < word.length; i++){ 
            result += '*';
        }
        return result; 
    }

    
    let words = text.split(' ');

    
    for (let i = 0; i < words.length; i++) {
        
        if (words[i].toLowerCase() === word.toLowerCase()) {
            words[i] = repeat(word); 
        }
    }

    
    console.log (words.join(' '));
}
