/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let arr = x.toString().split("");
    let originalLength = arr.length;
    let res = [];
    for(let i=0; i<arr.length; i++){
        if(arr[0]=== '-'){
            arr.shift();
        }
        res[arr.length-(i+1)] = arr[i];
    }
    if(Number(res.join('')) > 2147483647 || Number(res.join('')) < -2147483648) return 0;
    if(arr.length !== originalLength){
        return '-' + Number(res.join(''));
    }else if(arr[arr.length-1]===0){
        return Number(res.pop.join(''));
    }else{
        return Number(res.join(''));
    }
};