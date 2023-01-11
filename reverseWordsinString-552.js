/**
 * @param {string} s
 * @return {string}
 */

function reverseWords(s) {
    let str = s.split(" ");
    let temp = [];
    // console.log(str);

    for(i of str) {
        // console.log(i);
        let reversedWord ='';
        for(let j = i.length-1; j >= 0; j--){
            reversedWord = reversedWord.concat(i[j]);
            // console.log("reversed",reversedWord);
        }
        temp.push(reversedWord);
        // temp.push(" ");
        // console.log(temp);
    }

    return temp.join(' ');
}
