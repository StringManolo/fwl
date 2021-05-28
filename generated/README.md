### FWL is a simple "language" designed to build webpages and documents in html, markdown, bbcode...
## Write once, and generate documents in multiple formats
[Developed by StringManolo](https://github.com/stringmanolo)
![example image](https://github.com/favicon.ico)


All markdown features like
**bold**
_italic_
underline
 are available

```javascript
//This is my javascript code:
const number = 10;
alert(number);

/* Hope you like */

```
- variables
- predefined css
- language specific functions
- ...
---

1. simple
2. fast
3. portable
---

> fwl is easy
>
> fwl is fast

---

### How to use
1. Download the fwl.mjs module and import it in the file where you're going to write the document and bind it to global object
2. In case of node
3.  call fwl(global)
4. If you use a browser
5.  call fwl(window)
6. Set the document type to print
7. Call create method and inside braces use the functions you need to generate the code.
```javascript
import fwl from "./fwl.mjs";
fwl(global);
documentType = "bbcode"; //"markdown" "html"


```
This document is generated using node index.fwl.mjs, use it as an example/reference.

Example of a table:
| number | in text |
| --- | --- |
| 1 | one |
| 2 | two |

© 2021
