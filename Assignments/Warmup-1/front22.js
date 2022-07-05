function front22(str){
  if (str.length<2){
            return str+str+str;
  }else{
        let str1 =str.substring(0,2);
        return str1 +str+ str1;
  }
  
}