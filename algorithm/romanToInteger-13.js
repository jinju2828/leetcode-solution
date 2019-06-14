/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let arr = s.split('');
    let res =0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] == 'I'){
            if(arr[i+1] == 'V'){
                res += 4;
            }else if(arr[i+1] == 'X'){
                res += 9;
            }else{
                res += 1;
            }
        }else if(arr[i] == 'V'){
            if(arr[i-1] == 'I'){
                res += 0;
            }else{
                res += 5;
            }
        }else if(arr[i] == 'X'){
            if(arr[i+1] == 'L'){
                res += 40;
            }else if(arr[i-1] == 'I'){
                res += 0;
            }
            else if(arr[i+1] == 'C'){
                res += 90;
            }else{
                res += 10;
            }
        }else if(arr[i] == 'L'){
            if(arr[i-1] == 'X'){
                res += 0;
            }else{
                res += 50;
            }
        }else if(arr[i] == 'C'){
            if(arr[i+1] == 'D'){
                res += 400;
            }else if(arr[i-1] == 'X'){
                res += 0;
            }
            else if(arr[i+1] == 'M'){
                res += 900;
            }else{
                res += 100;
            }
        }else if(arr[i] == 'D'){
            if(arr[i-1] == 'C'){
                res += 0;
            }else{
                res += 500;
            }
        }else if(arr[i] == 'M'){
            if(arr[i-1] == 'C'){
                res += 0;
            }
            else{
                res += 1000;
            }
        }
    }
    return res;
};