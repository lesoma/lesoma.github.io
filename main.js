window.onload = function() {
  setTimeout(() => {
    typeWriter();
  }, 1000);
};

function myFunction() {
    var x = document.getElementById("navbar-responsive");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
}

function typeWriter() {
  var p = document.getElementById('name');
  p.innerHTML = '';
  var n = 0;
  var str = 'I am Soma Leisztner.';
  var typeTimer = setInterval(function() {
    n = n + 1;
    p.innerHTML = str.slice(0, n);
    if (n === str.length) {
      clearInterval(typeTimer);
      p.innerHTML = str;
      n = 0;
      setInterval(function() {
        if (n === 0) {
          p.innerHTML = str + "_"
          n = 1;
        } else {
          p.innerHTML = str
          n = 0;
        };
      }, 500);
    };
  }, 60)
}