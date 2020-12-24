
 
 alert('Hello! welcome to know more about food ^___^');

 var user = prompt ('please enter your name')
 while (user === '' || user === null){
     user = prompt ('please enter your name')
 }

   document.write(user + '<h4>'+ 'If more of us valued food and cheer and song above hoarded gold, it would be a merrier world '+'</h>')
 
var yourage = prompt('Please enter your age to know what kind of food you can eat');
var message ;

while (yourage === ""|| yourage === null){
  yourage = prompt('Please enter your age to know what kind of food you can eat');
}
if (yourage>45) {
  message = ' Kinds of food you can eat :Choose a variety of vegetables, including dark green, red and orange, beans and peas, starchy and non-starchy.Eat a variety of fruits.Include grains in your daily diet . Half of your grains should be whole grains.Stick to fat -free or low-fat dairy. Have protein at every meal. Use healthy oils, such as olive oil.'
    
} else {
  message = ' Kinds of food you can eat : CANNED SOUP. Canned Soup. POP-TARTS& BREAKFAST PASTRIES.SPECIAL K PROTEIN BARS. Special K bar.COLA. Soda.OREOS. Oreos. COCKTAILS & BEER.10&11. BAGELS & WHITE BREAD'
    
};
  alert (message);

  var foodhub;
 
  
  var askfood = prompt('Please enter the number of kinds of cheese do you prefer?')
  for  ( var i=1 ; i<= askfood ; i++){
    document.write('<p>'+ i  +'</p>' + '<img src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthiest-cheese-1296x728-swiss.jpg"style=width:600px;height:600px/>')
 
  }

  var yn = prompt('do you want to get notification?? yes or no please ');
  while (yn === '' || yn === null) {
    yn = prompt('do you want to get notification?? yes or no please ');
  }
  
  while (yn !== 'yes' && yn !=='no' ){
    yn = prompt('do you want to get notification?? yes or no please ');
  }
  
if (yn == 'yes') {
    foodhub = "You will be notified!";
} else { if( yn == 'no'){
  foodhub = "as you like!"
}
  }
  alert (foodhub);


 
  
  alert ('Thank you ^__^');

