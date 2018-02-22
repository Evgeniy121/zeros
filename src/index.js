module.exports = function getZerosCount(number) {
s=0;
  for (i=5;i<=number;i= i*5){

    s=s+Math.floor(number/i);

  }  return (s);
}
