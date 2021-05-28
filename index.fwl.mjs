import fwl from "./fwl.mjs";
fwl(global);

documentType = "html"; //"bbcode"; //"markdown";

const copyright = `© ${new Date().getFullYear()}`;

const generate = () => create (
html `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">`,

title `FWL`,

html `</head>
<body>`,

h1 `FWL (Function Web Language)`,

h3 `FWL is a simple "language" designed to build webpages and documents in html, markdown, bbcode...`, 

h2 `Write once, and generate documents in multiple formats`,

link `Developed by StringManolo https://github.com/stringmanolo`,

image `example image https://github.com/favicon.ico`,

br ``,

text `All markdown features like `,

bold `bold`,

italic `italic`,

underline `underline`,

br ` are available`,

code `javascript
//This is my javascript code:
const number = 10;
alert(number);

/* Hope you like */`,

list `variables,predefined css,language specific functions,...`,

hr ``,

olist `simple,fast,portable`,

hr ``,

quote `fwl is easy

fwl is fast`,

hr ``,

h3 `How to use` ,

olist`Download the fwl.mjs module and import it in the file where you're going to write the document and bind it to global object,In case of node call fwl(global),If you use a browser call fwl(window),Set the document type to print,Call create method and inside braces use the functions you need to generate the code.`,

code `javascript
import fwl from "./fwl.mjs";
fwl(global);
documentType = "bbcode"; //"markdown" "html"`,

p `This document is generated using node index.fwl.mjs, use it as an example/reference.`,


text `Example of a table:`,

table `number | in text
1 | one
2 | two`,

style_tables ``,

p(copyright),

style_default ``,

html `</body>
</html>`
);

console.log("Generated HTML:");
documentType = "html";
generate();

console.log("Generated BBcode:");
documentType = "bbcode";
generate();

console.log("Generated Markdown:");
documentType = "markdown";
generate();


