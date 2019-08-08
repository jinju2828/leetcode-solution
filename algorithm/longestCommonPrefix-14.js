const longestCommonPrefix = (strings) => {
    // if(strings.length === 0){
    //     return "";
    // }

    // if(strings.isEmpty){
    //     return "";
    // }
    // console.log(Object.entries(strings[0]));
    // const temp = Object.entries(strings[0]);
    console.log("total length", Object.keys(strings).length);
    var str = {...strings[0]};
    console.log("length", Object.keys(str).length);
    console.log({...strings[0]});
    console.log(typeof(str));
    const positions = Object.values(str).map(
        (c,i)=>
            strings.every(
                s=>s.length > i && s[i] === c) ? i : console.log("c is", c, "i is ", i)
    );
    console.log("this is position,", positions);
    console.log(typeof(positions));
    for(let i=0; i<positions.length; i++){
        if(positions[i]===undefined){
            return strings[0].slice(0,i);
        }
        return strings[0];
    }
    // throw new Error();
}

let res = longestCommonPrefix(["flower",'flow','flight']);
let res = longestCommonPrefix(["cc","cc","cc"]);
console.log(res);
