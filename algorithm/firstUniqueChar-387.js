/**
 * @param {string} s
 * @return {number}
 */

//first solution using indexOf
// var firstUniqChar = function(s) {
//     var splitString = s.split("");
//     var tempString = s.split("");
//     var splitLength = splitString.length;
//     var result = -1;
//
//     for(var i = 0; i < splitLength; i++){
//         var removed = tempString.splice(i, 1);
//         if(tempString.indexOf(splitString[i]) === -1) {
//             result = splitString.indexOf(splitString[i]);
//             break;
//         } else {
//             tempString.splice(i, 0, ...removed)
//         }
//     }
//
//     return result;
// };

    //second solution using hash map
var firstUniqChar = function(s) {
       var map = new Map();
       var result = -1;
       // map.set("oh", 1);
       // console.log(map.has("oh"));
       for(var i = 0; i < s.length; i++){
           if(map.has(s[i])){
               map.set(s[i], 2);
           } else {
               map.set(s[i], 1);
           }
       }
       // console.log(map);
       // console.log(map.get(s[0])===1);

       for(var j = 0; j<s.length; j++){
           if(map.get(s[j]) === 1){
               // console.log("hi");
               result = j;
               break;
           }
       }
       return result;
    };
var res = firstUniqChar("adacdc");
console.log(res);
