function longestCommonPrefix(strs) {
    if (!strs.length) return "";

    for (let i = 0; i < strs[0].length; i++) {
        for (let str of strs) {
            console.log("str?",str);
            console.log(str[i]);
            console.log(i);
            if (str[i] !== strs[0][i]) {
                return str.slice(0, i);
            }
        }
    }

    return strs[0];
}

// var res = longestCommonPrefix(["flo","flww","fldd"]);
var res = longestCommonPrefix([""]);
console.log(res);
