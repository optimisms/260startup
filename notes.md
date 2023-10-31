### Server info:  

Domain name: haileterry.com  
Public IP: 184.73.208.113  
SSH command: ssh -i ./JenkinsKeyPair.pem ubuntu@184.73.208.113

### Notes:
9/12 - I've already used GitHub a lot in the past so most of this was not new, but the GitLens feature on VSCode is very interesting and useful. It's similar to IntelliJ's GitHub features.

10/1 - If connecting to a new AWS EC2 instance isn't working, make sure you're using http and not https.

### CSS:
Selectors: `.` means class, `#` means id, `x[y]` means 'any x with attribute y', `x:y` is a psuedo selector like `section:hover`
| Combinator       | Meaning                    | Example        | Description                                |
| ---------------- | -------------------------- | -------------- | ------------------------------------------ |
| Descendant       | A list of descendants      | `body section` | Any section that is a descendant of a body |
| Child            | A list of direct children  | `section > p`  | Any p that is a direct child of a section  |
| General sibling  | A list of siblings         | `p ~ div`      | Any p that has a div sibling               |
| Adjacent sibling | A list of adjacent sibling | `p + div`      | Any p that has an adjacent div sibling     |

Flex: `@media` tag helps you specify if flex should be altered based on things like orientation or screen width
eg:
```@media (orientation: portrait) {
  main {
    flex-direction: column;
  }
}
```

### JavaScript
Primitive types:
| Type        | Meaning                                                    |
| ----------- | ---------------------------------------------------------- |
| `Null`      | The type of a variable that has not been assigned a value. |
| `Undefined` | The type of a variable that has not been defined.          |
| `Boolean`   | true or false.                                             |
| `Number`    | A 64-bit signed number.                                    |
| `BigInt`    | A number of arbitrary magnitude.                           |
| `String`    | A textual sequence of characters.                          |
| `Symbol`    | A unique value.                                            |

Functions:
- Anonymous functions: can be assigned to variables or passed as parameters to functions
```const add = function (a, b) {
  return a + b;
};
```
- Functions can also be declared inside functions
- `return` keyword only needed in arrow notation if curly braces are used
- A closure is a function which retains access to the scope of the function in which it was created, meaning it can remember values even after a function has terminated

Arrays:
- Some useful functions for arrays:

| Function | Meaning                                                   | Example                       |
| -------- | --------------------------------------------------------- | ----------------------------- |
| push     | Add an item to the end of the array                       | `a.push(4)`                   |
| pop      | Remove an item from the end of the array                  | `x = a.pop()`                 |
| slice    | Return a sub-array                                        | `a.slice(1,-1)`               |
| sort     | Run a function to sort an array in place                  | `a.sort((a,b) => b-a)`        |
| values   | Creates an iterator for use with a `for of` loop          | `for (i of a.values()) {...}` |
| find     | Find the first item satisfied by a test function          | `a.find(i => i < 2)`          |
| forEach  | Run a function on each array item                         | `a.forEach(console.log)`      |
| reduce   | Run a function to reduce each array item to a single item | `a.reduce((a, c) => a + c)`   |
| map      | Run a function to map an array to a new array             | `a.map(i => i+i)`             |
| filter   | Run a function to remove items                            | `a.filter(i => i%2)`          |
| every    | Run a function to test if all items match                 | `a.every(i => i < 3)`         |
| some     | Run a function to test if any items match                 | `a.some(i => 1 < 1)`          |

JSON: use `JSON.parse()` to turn JSON into an object, and `JSON.stringify()` to convert from object to JSON
