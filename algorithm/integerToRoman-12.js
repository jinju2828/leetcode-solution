/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {

    let arr = num.toString().split('').map(Number);
    let temp = [];
    let res = [];
    for(let i=arr.length-1; i>=0; i--){
        temp[i] = arr[i] * Math.pow(10, (arr.length-1)-i);
    }

    let map = new Map([[1,'I'], [5,'V'], [10,'X'], [50,'L'],[100,'C'],[500,'D'],[1000,'M']]);


    for(let i=0; i<temp.length; i++){
        if(temp[i] % 1000 === 0){
            let digit = temp[i] / 1000;
            res[i] = map.get(1000).repeat(digit);
        }else if(temp[i] % 100 === 0){
            let digit = temp[i] / 100;
            if(temp[i] < 400){
                res[i] = map.get(100).repeat(digit);
            }else if(temp[i] === 400){
                res[i] = 'CD';
            }else if(temp[i] === 500){
                res[i] = map.get(500);
            }else if(temp[i] < 900){
                res[i] = map.get(500) + map.get(100).repeat(digit-5);
            }else{
                res[i] = 'CM';
            }
        }else if(temp[i] % 10 === 0){
            let digit = temp[i] / 10;
            if(temp[i] < 40){
                res[i] = map.get(10).repeat(digit);
            }else if(temp[i] === 40){
                res[i] = 'XL';
            }else if(temp[i] === 50){
                res[i] = map.get(50);
            }else if(temp[i] < 90){
                res[i] = map.get(50) + map.get(10).repeat(digit-5);
            }else{
                res[i] = 'XC';
            }
        }else{
            if(temp[i] < 4){
                res[i] = map.get(1).repeat(temp[i]);
            }else if(temp[i] === 4){
                res[i] = 'IV';
            }else if(temp[i] === 5){
                res[i] = map.get(5);
            }else if(temp[i] < 9){
                res[i] = map.get(5) + map.get(1).repeat(temp[i]-5);
            }else{
                res[i] = 'IX';
            }
        }
    }
    return res.join('');
};
