
 
displaywelcomemessage ();

 var user = takeuserinput('please enter your name')
 user = information(user,'please enter your name')

  // document.write(user + '<h4>'+ 'If more of us valued food and cheer and song above hoarded gold, it would be a merrier world '+'</h>')
 qoute(user)

var yourage = takeuserinput('Please enter your age to know what kind of food you can eat');
yourage = information(yourage,'Please enter your age to know what kind of food you can eat')

yourage = kindoffood(yourage)
toalert(yourage)

  var askfood = takeuserinput('Please enter the number of kinds of cheese do you prefer?')
askfood=imgnum(askfood)
 
 var yn = takeuserinput('do you want to get notification?? yes or no please');

 yn = information(yn,'do you want to get notification?? yes or no please')
 yn = justyesno(yn,'do you want to get notification?? yes or no please')
 yn = msgugot(yn)
 
  toalert(yn)
 toalert('Thank you ^__^')




function displaywelcomemessage (){
  alert ('Hello! welcome to my website  ^___^')
}
function qoute(user){
  document.write(user+ '<p>'+ 'If more of us valued food and cheer and song above hoarded gold, it would be a merrier world'+'</p>')
}
 function takeuserinput(msg){
  return prompt (msg)
 }
 function information(userinput,msg){
  while (userinput === '' || userinput === null){
    userinput = takeuserinput(msg)
  }
  return userinput
 }

 function kindoffood(age){
  if (age>45) {
   age = ' Kinds of food you can eat :Choose a variety of vegetables, including dark green, red and orange, beans and peas, starchy and non-starchy.Eat a variety of fruits.Include grains in your daily diet . Half of your grains should be whole grains.Stick to fat -free or low-fat dairy. Have protein at every meal. Use healthy oils, such as olive oil.'
      
  } else {
    age = ' Kinds of food you can eat : CANNED SOUP. Canned Soup. POP-TARTS& BREAKFAST PASTRIES.SPECIAL K PROTEIN BARS. Special K bar.COLA. Soda.OREOS. Oreos. COCKTAILS & BEER.10&11. BAGELS & WHITE BREAD'   
  }
  return age
}
function toalert(v){
  alert (v)
}
function imgnum(askfood){
  for  ( var i=1 ; i<= askfood ; i++){
    document.write('<p>'+ i  +'</p>' + '<img src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthiest-cheese-1296x728-swiss.jpg"style=width:600px;height:600px/>')
  }
}
function justyesno(yn,msg){
  while (yn !== 'yes' && yn !=='no' ){
    yn = takeuserinput(msg)
 }
 return yn
}

function msgugot(yesno){
  if (yesno == 'yes') {
    yesno = "You will be notified!";
   } else { if( yesno == 'no'){
  yesno = "as you like!"
   }
}
return yesno
 }