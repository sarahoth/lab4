//alert('hello in turkey');
//alert('hi agine' + prompt ('please enter your name')+'!welcome in my website about turkey');
//var namecity = prompt('enter the name for best city in turkey for you :');
//console.log(namecity);
//var time =prompt('enter the time  in Turkey');
//document.write('<p>' + best_city + '</p>');
//var message;
//if(time < 12){
  //  message = 'amm';
//}else{
  //  message = 'pm';

//alert(message);

var userName = prompt('Enter your name ');
console.log(userName)

while(userName === ''){
    userName = prompt('enter your name');

}
console.log(userName);


var startN = prompt('enter the  start  number you want  to repit image');
var endN = prompt('enter the end number you want to repit image');
for(var i = startN;i<= endN; i++){
    document.write('<p'+ i + '</p>');

    document.write(i + '<img src="Turkey.jpg">' );
}

