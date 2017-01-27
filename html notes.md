# Html-
### The General Tool-
```
<tagName>Content</tagName>
```
### Boilerplate-
```

<!DOCTYPE html>
<html>
<head>

<!-- Our metadata goes here -->

  <title></title>

</head>
<body>

<!-- Our content goes here -->

</body>
</html>
```
### Common Tags-
- comment-
```
<!-- This is a comment.  It doesn't do anything! -->
```
- h1-
```
<h1>I'm a header </h1>
```
- h2-
```
<h2>I'm a slightly smaller header </h2>
```
- h6-
```
<h6>I'm the smallest header </h6>
```
- p-
```
<p>I'm a paragraph</p>
```
- button-
```
<button>I'm a button!</button>
```
- ul-
```
<ul>
	<li>List Item 1</li>
	<li>List Item 2</li>
</ul>
```
- ol-
```
<ol>
	<li>List Item 1</li>
	<li>List Item 2</li>
</ol>
```
### Attributes-


- Images
```
<img src="image.png">
```


- Links
```
<a href="www.google.com">Click me to go to Google</a>
<link rel="stylesheet" type="text/css" href="style.css">

```
- Form
```

<h1>Sign In</h1>
<form action="/sign-in-url" method="post">
    <input type="text">
    <input type="password">
    <button>Login</button>
</form>

```
### Input tag-
```
<input type="text">
<input type="date">
<input type="color">
<input type="file">
<input type="checkbox">
<input type="radio">
<input type="submit">
```
### Label-
```

<form action="/sign-in-url" method="post">
    <label>Username: <input type="text"></label>
    <label>Password: <input type="password"></label>
    <button>Login</button>
</form>

```
or 

```
<form action="/sign-in-url" method="post">
    <label for="username">Username:</label>
    <input id="username" type="text">
    <label for="password">Password:</label>
    <input id="password" type="password">
    <button>Login</button>
</form>
```
