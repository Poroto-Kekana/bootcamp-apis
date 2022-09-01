export default function longestWord (sentence)  {
    var arr = sentence.split(' ');
    var sum = 0;
    var storelong = ''
    for ( var i = 0; i < arr.length; i++) {
      let word = arr[i];
      if (word.length >= sum) {
        sum = word.length
        storelong = word
      }
    }
    return storelong
}