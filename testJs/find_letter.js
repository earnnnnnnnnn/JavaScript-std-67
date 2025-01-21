let string = "No Letter";
const atoz = 'abcdefghijklmnopqrstuvwxyz'.split('');
const lostLetter = (arr) => {
    const start = atoz.indexOf(arr[0]);
    const end = atoz.indexOf(arr[arr.length-1]);
    const sliced = atoz.slice(start, end + 1);
    if((sliced.filter((letter) => !arr.includes(letter))).length > 0){
        return sliced.filter((letter) => !arr.includes(letter));
    }
    return string;
};
console.log(lostLetter("abdefgik"));
console.log(lostLetter("mnopqs"));
console.log(lostLetter("suvxyz"));
console.log(lostLetter("ghijklmno"));