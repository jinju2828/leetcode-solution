var confusingNumber = function(N) {
    var input = N.toString().split('');
    var result = [];
    var temp = 0;

    for(var i = 0; i <input.length; i++ ){
        if(input[i] === '6'){
            result[input.length-(i+1)]='9';
        }else if(input[i] === '9'){
            result[input.length-(i+1)]='6';
        }else if(input[i] === '0'){
            result[input.length-(i+1)]='0';
        }else if(input[i] === '1'){
            result[input.length-(i+1)]='1';
        }else if(input[i] === '8'){
            result[input.length-(i+1)]='8';
        }else {
            temp ++;
            break;
        }
    }
    if(result.toString() === input.toString()){
        return false;
    }else if(result.toString() !== input.toString() && temp === 0){
        return true;
    }else{
        return false;
    }


};