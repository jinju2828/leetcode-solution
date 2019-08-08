var numJewelsInStones = function(J, S) {
    // var jewel = [...J];
    // var stone = [...S];
    // console.log(jewel, stone);
    // // console.log(J[1]===jewel[1]);
    // // console.log(7 in stone); in은 인덱스로만 가능.
    // var num = 0;
    // for(var i = 0; i< S.length; i++){
    //     for(var j=0; j<J.length; j++){
    //         if(jewel[j] === stone[i]){
    //             num ++;
    //         }
    //     }
    // }

    var num = 0;
    for(var i = 0; i<S.length; i++){
        for(var j=0; j<J.length; j++){
            if(J[j]===S[i]){
                num ++;
            }
        }
    }
    return num;

    return num;
};

var res = numJewelsInStones("aA","aAAbBBB");
console.log(res);
