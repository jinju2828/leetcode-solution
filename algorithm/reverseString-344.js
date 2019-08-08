// var reverseString = function(s) {
//     return s.reverse();
// };

var reverseString = function (s) {
    for(var i = 0, j=s.length-1; i<j; i++, j--){
        const x = s[i]; const y = s[j];
        s[i] = y; s[j] = x;
    }
    return s;
}

var res =  reverseString(["h","e","l","l","o"]);
console.log(res);
