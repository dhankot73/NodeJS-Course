function deFront(str){
    if(str.charAt(0) == 'a' && str.charAt(1) == 'b'){
    return str;
  } else if(str.charAt(0) == 'a'){
    return str.charAt(0) + str.substring(2);
  } else if(str.charAt(1) == 'b'){
    return str.substring(1);
  }
  return str.substring(2);
  
}