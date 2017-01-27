# Javascript notes-

### 5 Primitive Datatypes-
- Numbers
- Strings
- Booleans
- null 
- undefined

### built-in methods-
- alert()
- prompt()
- console.log()
- clear()

### While Loops-
Repeat code WHILE a condition is true
```
while(someCondition) {
  //run some code
}
```

### For Loops-
```
for(init; condition; step) {
  //run some code
}
```

### Arrays-
We can initialize an empty array two ways:
```
var friends = []; //no friends :(
var friends = new Array() //uncommon
```
Arrays can hold any type of data
```
var random_collection = [49, true, "Hermione", null];
```
Arrays have a length property
```
var nums = [45,37,89,24];
nums.length   //4
```

### Strings-
Single or Double quotes OK
```
"hello world"
'hello world'
```
Concatenation
```
"charlie" + "brown"  //"charliebrown"
```
Escape Characters start with "\"
```
"Singin \"Do wah diddy, diddy, dum diddy do\" "
"This is a backslash: \\"
```

Strings have a length property
```
"hello world".length  //11
```
Access individual characters using [] and an index
```
"hello"[0]  //"h"
"hello"[4]  //"o"
```
### Array methods-
- push/pop
- unshift/shift
- indexOf
- slice	
```
arr.slice(startIndex,endIndex)
```
you can also use slice() to copy an entire array
```
var otherNums = arr.slice();
```
Array Iteration-
```
for(var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```
or
```
arr.forEach(function(color){
//color is a placeholder, call it whatever you want
  console.log(color);
});
```

### Functions-
Functions let us wrap bits of code up into REUSABLE packages.  They are one of the building blocks of JS.
```
function doSomething() {
  console.log("HELLO WORLD");
}
```

### Objects-
```
var person = {
  name: "Cindy", 
  age: 32,
  city: "Missoula",
  addToAge:function(x){return x+this.age;}
};

```
bracket notation, similar to arrays:
```
person["name"];
```
dot notation:
```
person.name;
person.addToAge(1); // returns 33
```

### UNDERSCORE
```
http://underscorejs.org/
```

### Dom Methods-
```
document.getElementById()  //return match
```
```
document.getElementsByClassName() //returns array
```
```
document.getElementsByTagName()  //returns array
```
```
document.querySelector()  //returns first match
```
```
document.querySelectorAll()  //returns array
```
ADD A CLASS TO THE SELECTED ELEMENT
```
tag.classList.add("another-class");
```
REMOVE A CLASS
```
tag.classList.remove("another-class");
```
TOGGLE A CLASS
```
tag.classList.toggle("another-class");
```
Retrieve the textContent:
```
tag.textContent();
```
### Attributes
Use getAttribute() and setAttribute() to read and write attributes like src or href
```
var link = document.querySelector("a")
link.getAttribute("href");
link.setAttribute("href","www.google.com");
```

### Event Listener-
```
element.addEventListener(type,functionToCall);
```
Mdn events list- 
```
https://developer.mozilla.org/en-US/docs/Web/Events
```