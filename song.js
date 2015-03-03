var stanza = function (bottles) {
  if(bottles == 0) {
     return "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.";
  } else {
    return bottles + " bottles of beer on the wall, " + bottles + " bottles of beer. Take one down, pass it around, " + (bottles-1) + " bottles of beer on the wall.";
  }
};

for(i = 99; i>=0; i--) {
    var newDiv = document.createElement("div"); 
    var round = stanza(i);
    newDiv.innerText = round;
    var song = document.getElementById('song');
    song.appendChild(newDiv);
};
