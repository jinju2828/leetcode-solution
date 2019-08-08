
//solution 1 이게 젤 빠름
var numJewelsInStones = function(J, S) {
    const jewels = new Set(J);
    return S.split('').reduce((res, s) => res + jewels.has(s), 0);
}

//solution 2 두번째로 빠름
var numJewelsInStones = (J, S) => S.split('').filter(elem => J.includes(elem)).length;
var res = numJewelsInStones('aA', 'aAAbbb');
console.log(res);

//solution 3 어쨌든 for loop에다가 indexOf 돌리는 거라 내 거랑 비슷함
var numJewelsInStones = function(J, S) {
    let num = 0;
    for(var i=0; i<S.length; i++){
        if(J.indexOf(S[i])>-1){
            num++
        }
    }
    return num;
};

var res = numJewelsInStones('aA', 'aAAbbb');
console.log(res);
