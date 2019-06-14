/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if(!s || s.length === 0){
        return 0;
    }
    const map = new Map([['I',1],['V',5],['X',10],['L',50],['C',100],['D',500],['M',1000]]);

    let i = s.length - 1;
    let res = map.get(s[i]);

    while(i>0){
        let prev = map.get(s[i-1]);
        let curr = map.get(s[i]);

        if(curr > prev){
            res -= prev;
        }else{
            res += prev;
        }
        i--;
    }
    return res;
};