const writeCards = (names,event) => {
    const messages = []
    for(let i = 0; i < names.length;i++) {
        
           const newMessage = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
           messages.push(newMessage)
    }
   
    return messages;
}

writeCards;



function countDown() {
  for (let i = 10; i  >= 0; i = i - 1) {
    console.log(i);
  }
}  
  countDown;