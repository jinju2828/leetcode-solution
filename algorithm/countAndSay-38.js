/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n===1){
        var res = 1;
        return res.toString();
    }else{
        var arr = countAndSay(n-1).split('');
        var count = 0;
        var res = '';
        for(var i=0; i < arr.length; i++){
            if(arr[i] !== arr[i+1]){
                count ++;
                res = res+ count + arr[i];
                count = 0;
            }else if(arr[i] === arr[i+1]){
                count ++;
            }
            else if(arr[i+1] === undefined){
                count ++;
                res = res+ count+ arr[i];
            }
        }
        return res;

    }
};
