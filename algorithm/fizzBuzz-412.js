// //solution 1
// var fizzBuzz = function(n) {
//     var arr = [];
//     for(var i=0; i<n; i++){
//         if((i+1) % 3 === 0 && (i+1) % 5 === 0){
//             arr.push("FizzBuzz");
//         }else if((i+1) % 3 === 0){
//             arr.push("Fizz");
//         }else if((i+1) % 5 === 0){
//             arr.push("Buzz");
//         }else{
//             arr.push(''+(i+1)+'');
//         }
//     }
//     return arr;
// };
//
// //solution 2
// var fizzBuzz = function(n) {
//     var result = [],
//         str, i=1;
//     while( i <= n ){
//         str = "";
//         if( i%3===0 ) str = 'Fizz';
//         if( i%5===0 ) str += 'Buzz';
//         if(!str) str += i;
//         result.push( str );
//         i++;
//     }
//     return result;
// };

//solution 3 with fill and map. Just 1 line!!
var fizzBuzz = function(n) {
    return new Array(n).fill(0).map((a, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i);
    // () + () 가 결과 값이 아무 것도 없을 때 즉 ''이면 ||으로 넘어가서 i를 리턴
    // (a, i) => (++i % 3 ? 'Not Fizz' : 'Fizz') + (i % 5 ? 'Not Buzz' : 'Buzz') || '' + i 이렇게 하면 || 앞에가 아무 값이 없지 않고
    // 어떤 값이 있기 때문에 || 뒤로 안 넘어감
    // A || B 에서는 A가 empty이거나 거짓이거나 그러면 ||B로 가는데
    // A && B 에서는 A가 값이 있고 true여야 B로 넘어가는 것임
    //이것이 바로 || 과 &&의 차이
};

var res = fizzBuzz(15);
console.log(res);
