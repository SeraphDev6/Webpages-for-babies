// var h = `${document.body.innerHTML}`
// document.body.innerHTML = ""
// document.body.innerText = h
html2canvas(document.querySelector("body")).then(canvas => {
  document.body.innerHTML = ""
  document.body.appendChild(canvas)
});

