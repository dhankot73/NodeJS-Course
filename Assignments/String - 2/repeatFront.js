function repeatFront(str, n){
  let str1 = '';
  for(let i=n; i>0; i--){
    str1+= str.substring(0,i);
  }
  return str1;
  
}