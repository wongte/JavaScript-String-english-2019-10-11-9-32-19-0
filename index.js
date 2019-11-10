// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
name = name.toUpperCase();
console.log(name);

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
var sentence_array = sentence.split(' ');
for (let i = 0; i < sentence_array.length; i++) {
  sentence_array[i] = sentence_array[i].charAt(0).toUpperCase() + sentence_array[i].slice(1)
}
sentence = sentence_array.join(' ')
console.log(sentence)


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
var money_number = Number(money.slice(1))
console.log(money_number)
