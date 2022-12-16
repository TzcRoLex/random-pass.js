# random-pass.js
> Generate Random Password

## Installation

```sh
npm install random-pass.js
```

## Usage
> Generate Random Password With Symbols, Uppercase And Lowercase (Default Length = 8)
```javascript
const { genRandomPassword } = require("random-pass.js");

let password = genRandomPassword();

console.log(password) // oj7#Yc44
```
> Generate Random Password With Symbols, Uppercase And Lowercase (Length = 15)
```javascript
const { genRandomPassword } = require("random-pass.js");

let password = genRandomPassword({ length: 15 });

console.log(password) // jsA$#6OA1M3)Bll
```
> Generate Random Password Without Uppercase (Default Length = 8)
```javascript
const { genRandomPassword } = require("random-pass.js");

let password = genRandomPassword({ upper: false });

console.log(password) // k6!4zat0
```
> Generate Random Password Without Lowercase (Default Length = 8)
```javascript
const { genRandomPassword } = require("random-pass.js");

let password = genRandomPassword({ lower: false });

console.log(password) // FC5$Z3SK
```
> Generate Random Password Without Symbols (Default Length = 8)
```javascript
const { genRandomPassword } = require("random-pass.js");

let password = genRandomPassword({ symbols: false });

console.log(password) // 70862727
```
> Generate Random Password Without Lowercase, Uppercase And Symbols (Default Length = 8)
```javascript
const { genRandomPassword } = require("random-pass.js");

let password = genRandomPassword({ lower: false, upper: false, symbols: false });

console.log(password) // uOXvpgqh
```