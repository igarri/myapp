var para = document.createElement("p");
var node = document.createTextNode("This is my text.");
para.appendChild(node);
var element = document.getElementById("title");
element.appendChild(para);