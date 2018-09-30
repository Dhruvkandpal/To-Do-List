var items = document.getElementsByTagName("li");
var i;
for (i = 0; i < items.length; i++) {
  var span = document.createElement('span');
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  items[i].appendChild(span);
}
