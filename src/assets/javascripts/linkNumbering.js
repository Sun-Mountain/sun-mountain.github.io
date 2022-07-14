(function () {
  var l = document.links;
  console.log(l);
  for(var i=0; i<l.length; i++) {
    l[i].classList.value = "link-color-"+(i+1);
  }
})()