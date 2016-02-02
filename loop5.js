var n = 9, start = 1, outputstring="";
while ( start <= n ) {
  if ( start !==n ) {
    outputstring +=  start + ",";
  } else {
    outputstring += start;
  }

  start++;
}

document.querySelector('#target').textContent = outputstring;
