function repeatEnd(str, n){
  let str1 = '';
  for(let i=0; i<n; i++){
    str1+= str.substring(str.length - n, str.length);
  }
  return str1;
}