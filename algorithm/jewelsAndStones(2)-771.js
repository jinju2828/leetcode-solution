
//solution 1 이게 젤 빠름, set, reduce
var numJewelsInStones = function(J, S) {
    const jewels = new Set(J);
    console.log(jewels);
    console.log(100+jewels.has(S[0]));
    return [...S].reduce((res, s) => res + jewels.has(s), 0); //0은 accumulator로 initial value. 숫자로는 0, object면 {} empty로
}

// solution 2 두번째로 빠름. filter! truthy 한 결과만 array로 return
var numJewelsInStones = (J, S) => S.split('').filter(elem => J.includes(elem)).length;
// 혹은 [...S].filter((char) => J.indexOf(char) > -1 ).length // S.split('')랑 [...S]랑 같으므로

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

var res = numJewelsInStones('aAAA', 'aAAbbb');
console.log(res);
