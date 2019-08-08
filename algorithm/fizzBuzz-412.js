//solution 1
var fizzBuzz = function(n) {
    var arr = [];
    for(var i=0; i<n; i++){
        if((i+1) % 3 === 0 && (i+1) % 5 === 0){
            arr.push("FizzBuzz");
        }else if((i+1) % 3 === 0){
            arr.push("Fizz");
        }else if((i+1) % 5 === 0){
            arr.push("Buzz");
        }else{
            arr.push(''+(i+1)+'');
        }
    }
    return arr;
};

//solution 2
var fizzBuzz = function(n) {
    var result = [],
        str, i=1;
    while( i <= n ){
        str = "";
        if( i%3===0 ) str = 'Fizz';
        if( i%5===0 ) str += 'Buzz';
        if(!str) str += i;
        result.push( str );
        i++;
    }
    return result;
};

//solution 3 with fill and map. Just 1 line!!
var fizzBuzz = function(n) {
    return new Array(n).fill(0).map((a, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i);
};

var res = fizzBuzz(15);
console.log(res);
