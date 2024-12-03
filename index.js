function writeCards(names, event) {
const messages = [];
 for (let i = 0; i < names.length; i++) {
  const message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;

  messages.push(message);
 }
 
 return messages;
}

console.log(writeCards(["Guadalupe", "ollie", "Aki"], "surprise"));


function countDown() {
  for(let i = 10; i >= 0; i--) {
    console.log(i);
  }
}