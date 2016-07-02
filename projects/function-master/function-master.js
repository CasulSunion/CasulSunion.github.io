//Should take an object and return its values in an array

function objectValues(obj) {
    return Object.keys(obj).map(key => obj[key]);
}

//Should take an object and return all its keys in a string each separated with a space

function keysToString(obj) {
    return Object.keys(obj).join(" ");
}

//Should take an object and return all its string values in a string each separated with a space

function valuesToString(obj) {
    var ob =[];
    for(var i in obj){
        if(typeof obj[i] === "string"){
            ob.push(obj[i]);
        }
    }
    return ob.join(" ");
    //var string = Object.values(obj);
    //return Object.prototype.toString(string).join(" ");
    // Object.keys(obj);
    // return Object.prototype.toString;
}

//Should take one argument and return 'array' if its an array and 'object' if its an object
function arrayOrObject(thing) {
    if(Array.isArray(thing)){
        return "array";
    }
    if(typeof thing === "object"){
        return "object";
    }
}
//Should take a string of one word, and return the word with its first letter capitalized
function capitalizeWord(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}
//Should take a string of words and return a string with all the words capitalized
function capitalizeAllWords(words){
    return  words.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
//Should take an object with a name property and return 'Welcome <Name>!'
function welcomeMessage(Name){
    Name
    return "Welcome <>!";
}
//Should take an object with a name an a species and return '<Name> is a <Species>'

// Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'

//Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.

// Should take a name and an object and add the name to the object's friends array then return the object

//Should take a name and an object and return true if <name> is a friend of <object> and false otherwise

//Should take a name and a list of people, and return a list of all the names that <name> is not friends with

//Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.

// Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>

//Should take an array and return an array with all the duplicates removed
