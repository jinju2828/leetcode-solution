/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var strObj = {...strs[0]}; //var strObj = [...strs[0]]로 하니까 자꾸 strs[0] is not iterable이라고 나옴. 그래서 {}로 바꾼 후
    if(Object.keys(strObj).length === 0) { //strs가 [""], ""일 경우
        return "";
    }

    if(Object.keys(strs).length === 1) { //strs가 ["a"]일 경우
        return strObj[0];
    }
    const position = Object.values(strObj).map(
        (c,i) => strs.every(
            s => s.length > i && s[i] === c) ? i : undefined
    );
    for(var i =0; i<position.length; i++){
        if(position[i]===undefined){
            return strs[0].slice(0,i);
        }
    }
    if(!Object.values(position).includes(undefined)){ // strs가 ["a", "a"]일 경우. Position이 undefined가 없을 때, 즉 값이 전부다 같을때
        return strs[0];
    }
};
