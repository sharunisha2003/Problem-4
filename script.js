function longword(str){
    str = str.split(" ") 
return str.sort((a, b) => b.length - a.length)[0] 
}
let str =longword("Hello!! This is Sharu");
document.write("The longest word in the given string(Hello!! This is Sharu) is "+str);