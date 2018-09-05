# copy.js

copy-simple.js is a painless copy helper for JavaScript.

# Usage

There are different functions to copy values. All methods will return true or false;

## Install with NPM

```shell
npm i copy-simple
```

## Import copy-simple

```javascript
import copy from 'copy-simple';
```

## Copy Element Value - val()

```html
<input id="testVal" type="text" value="Test 2-3-4">
```

```javascript
var copiedValue = copy("#testVal").val()
```

## Copy Element Text - text()

```html
<div id="test">Test Content</div>
```

```javascript
var copiedText = copy("#test").text()
```

## Copy Element HTML - html()

```html
<div id="test2">Test Content2</div>
```

```javascript
var copiedHtml = copy("#test2").html()
```

## Copy Current URL - url()

```javascript
var copiedUrl = copy().url()
```

## Copy Selected Text - selected()

```html
<div>My Text</div>
```

```javascript
var copiedSelected = copy().selected()
```