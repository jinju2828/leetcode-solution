var twoSum = function(nums, target){
    var arr = nums;
    var tar = target;
    var res = [];

    for(var i=0; i<arr.length-1; i++){
        for(var j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j] === tar){
                res = [i,j];
                break;
            }
        }
    }
    return res;