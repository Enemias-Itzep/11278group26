const { strict } = require("yargs");

//Funtion that returns string without vocab
function function1(s)    {
    let size = s.length;


    for (let i = 0; i < s.length; i++)  {
        //Removes any lowercase vowel
        if (s.charAt(i) == 'e' | s.charAt(i) == 'a' | s.charAt(i) == 'i' |
            s.charAt(i) == 'o' | s.charAt(i) == 'e')    {
            s = s.replace(s.charAt(i), '');
            i--;
            
        }
    }
    return s;
}

s = function1("Enemias");

console.log(s);