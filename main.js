window.onload = function() {
  setTimeout(() => {
    typeWriter();
  }, 1000);
};

// function myFunction() {
//     var x = document.getElementById("navbar-responsive");
//     if (x.className === "navbar") {
//       x.className += " responsive";
//     } else {
//       x.className = "navbar";
//     }
// }

function typeWriter() {
  var p = document.getElementById('name');
  p.innerHTML = '';
  var n = 0;
  var str = 'I\'m Soma Leisztner.';
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

const faders = document.querySelectorAll('.fade-in-left');
const faders2 = document.querySelectorAll('.fade-in-right')
const bouncers = document.querySelectorAll('.bounce-in');

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -200px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return
    } else {
      entry.target.classList.add('animation');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

faders2.forEach(fader => {
  appearOnScroll.observe(fader);
});

bouncers.forEach(bouncer => {
  appearOnScroll.observe(bouncer);
});

// var btn = document.querySelectorAll(".project-card");
// var modal = document.querySelectorAll('.modal');

var btn = document.querySelectorAll(".project-card");

for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
    var modal = document.getElementById(this.dataset.modal);
    modal.style.display = "block";
}, false);
}
var modals = document.querySelectorAll('.modal');

window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
   for (var index in modals) {
    if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
   }
  }
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar");
const headerTop = document.querySelector(".header-container .flex-item-left");

hamburger.addEventListener("click", mobileMenu);
hamburger.addEventListener("click", headerTopVisibilityOff);

function headerTopVisibilityOff() {
  if (headerTop.style.visibility == "hidden") {
    headerTop.style.visibility = "visible";
  } else {
    headerTop.style.visibility = "hidden";
  }
}

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("responsive");
}

const navLink = document.querySelectorAll(".links a");
navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("responsive");
}