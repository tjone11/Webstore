var n = 100, song = '<ul class=lyrics>';

while ( n >= 0 ) {
  if ( n !== 0 ) {
    song = song + '<li>' + n + "bottle" + (n === 1 ? '' : 's')
    + " of beer on the wall! chug, chug, chug</li>";
  } else {
    song+= "<li>no bottles of beer! stumble, stumble, stumble...</li>";
  }
  n--
}
song += "</ul>";

document.querySelector('#lyrics').innerHTML = song;
