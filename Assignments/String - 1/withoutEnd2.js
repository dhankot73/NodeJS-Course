function withoutEnd2(str){
  if(str.length < 3){
    return "";
  }else{
    return str.substring(1,str.length-1);
  }
  
}