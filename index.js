function theBeatlesPlay(musican, instrument){
  var newarray = [];
  for (var i = 0; i < musican.length; i++){
    var playstring = " plays "
    //console.log(musican[i] + playstring + instrument[i]);
    newarray[i] = musican[i] + playstring + instrument[i];
  }
  return newarray
}

function johnLennonFacts(array){
  var excite = "!!!";
  var newarray = [];
  let i = 0;
  while ([i < array.length]){
    console.log(array[i]);
    newarray[i] = array[i] + excite;
    console.log(newarray[i]);
  }
  return newarray;
}