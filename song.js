var stanza = function (bottles) {
  if(bottles == 0) {
     return "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.";
  } else {
    return bottles + " bottles of beer on the wall, " + bottles + " bottles of beer. Take one down, pass it around, " + bottles + " bottles of beer on the wall.";
  }
};

for(i = 99; i>=0; i--) {
    //Creates a new div.  When you use < and > around a tag it creates a new one in jQuery
    var newDiv = document.createElement("div"); 
    //Creates string needed
    var round = stanza(i);
    //Puts text into that new div
    newDiv.innerText = round;
    //Get Song by ID
    var song = document.getElementById('song');
    //appends it to song
    song.appendChild(newDiv);
};
