var maxProfit = function(prices) {

    var result = 0; // minimum value
    var maxProfit = 0;
    var count = prices.length;

    for(var i = 0; i < count-1; i++){
        for(var j = i+1; j < count; j++){
            var temp = prices[i]- prices[j];
            if(temp < result){
              result = temp;
            }
        }
    }

    if(result === 0) {
         maxProfit = 0;
    } else {
        maxProfit = Math.abs(result);
    }

    return maxProfit;
};

var res = maxProfit([7,5,2,6,4,1,3]);
console.log(res);
