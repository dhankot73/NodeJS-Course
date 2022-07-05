function stringBits(str) {
  let a = "";
  for (let i = 0; i < str.length; i += 2){
    a = a + str[i];
  }
  return a;
}