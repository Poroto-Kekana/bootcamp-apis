export default function shortestWord(sentence) {
    var arr = sentence.split(' ');
    var sum = 10;
    var storeShort = ''
    for (var i = 0; i < arr.length; i++) {
        let word = arr[i];
        if (word.length <= sum) {
            sum = word.length
            storeShort = word
        }
    }
    return storeShort
}