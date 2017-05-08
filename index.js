function getFirstSelector(selector) {
  return document.querySelector (selector)
}

function nestedTarget () {
  return document.querySelector (".target")
}

function deepestChild() {
var list= document.getElementById ("grand-node").querySelectorAll("div")
return list[list.length - 1]
}

function increaseRankBy(n) {
  var list= document.querySelectorAll (".ranked-list")  
for (var i=0; i < list.length; i++) {
  var n = parseInt(list[i].innerHTML)
  list[i].innerHTML= n;
}
}