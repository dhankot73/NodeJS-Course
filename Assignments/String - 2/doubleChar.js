function doubleChar(str){
  let result = "";
  for(let i = 0; i < str.length;i++)
  {
    result = result + str.charAt(i) + str.charAt(i);
  }
    return result;
}