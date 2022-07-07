function countCode(str){
 let result = 0;
for (let i = 0; i < str.length - 3; i++)
{
if(str.substring(i, i + 2)=="co" && str.substring(i + 3, i + 4)=="e")
result++;
}
 
return result;
}