//Add "Move to last" button for every list item
var item = document.getElementsByTagName("li");
var i;
for (i = 0; i < item.length; i++) {
  var span = document.createElement('span');
  var txt = document.createTextNode("Move to Last");
  span.className = "check";
  span.appendChild(txt);
  item[i].appendChild(span);
}

//Move the list item to last position when clicked on "Move to Last"
var check = document.getElementsByClassName("check");
var i;
for (i = 0; i < check.length; i++) {
  check[i].onclick = function() {
    if(confirm("You want to complete this task later?")) {
      var div = this.parentElement;
      var parent = div.parentElement;
      parent.appendChild(div);
    }
  }
}

//Add a "Remove" button for every list item
var item = document.getElementsByTagName('li');
var i;
for (i = 0; i < item.length; i++) {
  var span = document.createElement('span');
  var txt = document.createTextNode("Remove");
  span.className = "close";
  span.appendChild(txt);
  item[i].appendChild(span);
}

//Remove the item from the list when clicked on "Remove" button
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//Add a line through the selected item if checked(task completed)
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

//Create new task
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var items = document.getElementsByTagName("li");
  var i;
  for (i = 0; i < items.length; i++) {
    var span = document.createElement('span');
    var txt = document.createTextNode("Move to last");
    span.className = "check";
    span.appendChild(txt);
    items[i].appendChild(span);
  }

  var check = document.getElementsByClassName("check");
  var i;
  for (i = 0; i < check.length; i++) {
    check[i].onclick = function() {
      if(confirm("You want to complete this task later?")) {
        var div = this.parentElement;
        var parent = div.parentElement;
        parent.appendChild(div);
      }
    }
  }

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Remove");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
