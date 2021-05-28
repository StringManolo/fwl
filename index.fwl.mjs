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

/* Hope you like */
`,

list `variables,predefined css,language specific functions,...`,

hr ``,

olist `simple,fast,portable`,

hr ``,

quote `fwl is easy

fwl is fast`,

hr ``,

table `number | in text
1 | one
2 | two`,

//style_tables ``,

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


