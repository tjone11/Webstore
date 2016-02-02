var n = 1, sum = 1;

while ( n <= 10 ) {
  sum = sum * n;
  n++;
}

document.querySelector('#result').innerHTML = '<p>' + "The product of the numbers 1 through " + (n-1) + " is " + sum + "." + '</p>';
