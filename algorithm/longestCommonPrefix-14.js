const longestCommonPrefix = (strings) => {
    if(strings.length === 0){
        return "";
    }
    const positions = [...strings[0]].map(
        (c,i)=>
            strings.every(
                s=>s.length > i && s[i] === c) ? i : undefined
    );
    console.log("this is position,", positions);
    for(let i=0; i<positions.length; i++){
        if(positions[i]===undefined){
            return strings[0].slice(0,i);
        }
    }
    throw new Error();
}

let res = longestCommonPrefix(["flower",'flow','flight']);
console.log(res);
