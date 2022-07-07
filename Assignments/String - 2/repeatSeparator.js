function repeatSeparator(word, sep, count){
  let str1 = '';
  
  for(let i=0; i<count; i++){
    if(i<count-1){
      str1 += word+sep;
    }else{
      str1 += word;
    }
  }
    return str1;
}