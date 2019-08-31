function balikKata(kata) {
    var ttt = '';
    var pj = kata.length;
    for (var i = pj  - 1; i >= 0; i--){

         ttt = ttt + kata[i];
    }  
    return ttt
  }
  
  
  console.log(balikKata('Hello World and Coders')); 
  console.log(balikKata('John Doe')); 
  console.log(balikKata('I am a bookworm')); 
  console.log(balikKata('Coding is my hobby')); 
  console.log(balikKata('Super')); 