# jQuery notes-
```
api.jquery.com
```
### selector-
```
$("selector")
```
- works as querySelectorAll
- returns a array of all selected elements
- $("selector")[index] doesn't works
- no need to loop

### Css-
```
$("selector").Css("property","value")
```
- can pass object of multiple value
- can change multiple properties of multiple elements

### text-
```
$("selector").text()//return textContent
$("selector").text("new text")
```
manipulate 
and store new ext in all selected tags

### html-
```
$("selector").html()//retuens inner HTML
$("selector").html("<p>new html</p>")
```

### attr-
 change/manipulate attributes
```
$("selector").attr("attributeName")
$("selector").attr("attributeName","newValue")
```
### value-
```
$("input").val()
$("input").val("value")
```

### class-
```
.addClass()
.removeClass()
.toogleClass()
```

### Events-
- Click-
```
$("button").click(func())
```
in function,this keyword doesn't works,we use $(this)

### character codes-
```
https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
```

### Keypress,keyup and keydown-
keyup/keydown indicates which key is pressed whereas 
Keypress indicates which character is entered
```
$().keypress(func());
$("input").keypress(func(event){
if (event.which === 13)//when user press Enter from char codes
	//code here;	
}
```

### Events Listeners-
```
$("").on("event",callbackFunction) 
```
### .click() vs .on("click",func())
click() only adds listener for existing elements
whereas on() adds listener for potential elements

### Effects-

- .fadeOut(1000,function(){})
- .fadeIn()
- .fadeToggle()
- .slideUp()
- .slideDown()
- .slideToggle()

### Event bubbling-
events fired inside out
cured by
```
event.stopPropagation()
```

### Append elements-
```
.append("html");
```
### Html crawling-
```
.parent()
```
