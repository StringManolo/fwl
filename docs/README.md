  
code: javascript  
# fwl
---  
### ES6 module
---  
##### FWL (Function Web Language) is a javascript ES6 module code geneator. Is intended to write full featured documentation and generate html, markdown and bbcode.
---  
Return: _undefined_   
  
  
  
##### _function_ **fwl**  
Return: _undefined_   
Argument: **obj** _Object_   Object to bind the methods to  
Return: _undefined_   
  
  
  
##### _property_ **obj.documentType**  
Return: _undefined_   
Values: "html","markdown","bbcode"  
  
  
  
##### _method_ **obj.create**  
Return: _undefined_   
Argument: **(...s)** _String_   String/s to print  
Return: **str** _String_   All the strings  
  
  
  
##### _method_ **obj.html**  
Return: _undefined_   
Argument: **s** _String_   HTML code to include  
Return: **s** _String_   Html code  
  
  
  
##### _method_ **obj.title**  
Return: _undefined_   
Argument: **s** _String_   Document title  
Return: **code** _String_   String between title tags (html)  
  
  
  
##### _method_ **obj.text**  
Return: _undefined_   
Argument: **s** _String_   Text to add.  
Return: **s** _String_   Text code  
  
  
  
##### _method_ **obj.p**  
Return: _undefined_   
Argument: **s** _String_   Text to insert  
Return: **s** _String_   Paragraph code  
  
  
  
##### _method_ **obj.br**  
Return: _undefined_   
Argument: **s** _String_   Text to prepend the linebreak  
Return: **s** _String_   Linebreak code  
  
  
  
##### _method_ **obj.h1**  
Return: _undefined_   
Argument: **s** _String_   Heading text  
Return: **s** _String_   Heading code  
  
  
  
##### _method_ **obj.h2**  
Return: _undefined_   
Argument: **s** _String_   Heading text  
Return: **s** _String_   Heading code  
  
  
  
##### _method_ **obj.h3**  
Return: _undefined_   
Argument: **s** _String_   Heading text  
Return: **s** _String_   Heading code  
  
  
  
##### _method_ **obj.h4**  
Return: _undefined_   
Argument: **s** _String_   Heading text  
Return: **s** _String_   Heading code  
  
  
  
##### _method_ **obj.h5**  
Return: _undefined_   
Argument: **s** _String_   Heading text  
Return: **s** _String_   Heading code  
  
  
  
##### _method_ **obj.h6**  
Return: _undefined_   
Argument: **s** _String_   Heading text  
Return: **s** _String_   Heading code  
  
  
  
##### _method_ **obj.link**  
Return: _undefined_   
Argument: **s** _String_   Link text + space + url  
Return: **s** _String_   Clickable link code  
  
  
  
##### _method_ **obj.image**  
Return: _undefined_   
Argument: **s** _String_   Alt text + space + url  
Return: **s** _String_   Image code  
  
  
  
##### _method_ **obj.code**  
Return: _undefined_   
Argument: **s** _String_   Code. First line is only the language name  
Return: **s** _String_   Code block.  
  
  
  
##### _method_ **obj.bold**  
Return: _undefined_   
Argument: **s** _String_   Text  
Return: **s** _String_   Bold text  
  
  
  
##### _method_ **obj.italic**  
Return: _undefined_   
Argument: **s** _String_   Text  
Return: **s** _String_   Italized text  
  
  
  
##### _method_ **obj.underline**  
Return: _undefined_   
Argument: **s** _String_   Text  
Return: **s** _String_   Underlined text (markdown returns normal text)  
  
  
  
##### _method_ **obj.list**  
Return: _undefined_   
Argument: **s** _String_   Comma separated list of items  
Return: **s** _String_   List code  
  
  
  
##### _method_ **obj.olist**  
Return: _undefined_   
Argument: **s** _String_   Comma separated list of items  
Return: **s** _String_   List code  
  
  
  
##### _method_ **obj.hr**  
Return: _undefined_   
Argument: **()**  
Return: **s** _String_   Horizontal separator code  
  
  
  
##### _method_ **obj.quote**  
Return: _undefined_   
Argument: **s** _String_   Text block  
Return: **s** _String_   Quoted block  
  
  
  
##### _method_ **obj.table**  
Return: _undefined_   
Argument: **s** _String_   | separated list  
Return: **s** _String_   Table code  
  
  
  
##### _method_ **obj.style_tables**  
Return: _undefined_   
Argument: **()**  
Return: **s** _String_   CSS style code  
  
  
  
##### _method_ **obj.style_default**  
Return: _undefined_   
Argument: **()**  
Return: **s** _String_   CSS style code  
  
  
  
##### _function_ **replaceAll**  
Return: _undefined_   
Argument: **str** _String_   Text to replace findings from  
Argument: **pattern** _String_   Text (coverted to regular expression) to replace  
Argument: **newStr** _String_   New text to replaced findings for  
Return: **s** _String_   Text with all ocurrences replaced  

