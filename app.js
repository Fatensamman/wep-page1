
var yourage = prompt('Please enter your age to know what kind of food you can eat');
var message ;

if (yourage>45) {
  message = ' Kinds of food you can eat :Choose a variety of vegetables, including dark green, red and orange, beans and peas, starchy and non-starchy.Eat a variety of fruits.Include grains in your daily diet . Half of your grains should be whole grains.Stick to fat -free or low-fat dairy. Have protein at every meal. Use healthy oils, such as olive oil.'
    
} else {
  message = ' Kinds of food you can eat : CANNED SOUP. Canned Soup. POP-TARTS& BREAKFAST PASTRIES.SPECIAL K PROTEIN BARS. Special K bar.COLA. Soda.OREOS. Oreos. COCKTAILS & BEER.10&11. BAGELS & WHITE BREAD'
    
};
  alert (message);

  var foodhub;

  var yn = prompt('do you wantt to get notification?? ok or cancel ');
 
if (confirm (yn) == true) {
    foodhub = "You will be notified!";
} else {
   foodhub = "as you like!"
  }



  alert (foodhub);
  
  alert ('Thank you ^__^');

