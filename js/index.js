// Your code goes here

const navItem = document.querySelectorAll('.nav-link');
navItem.forEach((item) => {
   item.addEventListener('mouseover', () => {
      item.style.color = 'blue';
   });
});

const logo = document.querySelector('.logo-heading');
logo.addEventListener('click', () => {
   logo.style.border = '1px solid green';
})

const btn = document.querySelectorAll('.btn');
btn.forEach((btn) => {
   btn.addEventListener('dblclick', () => {
      btn.style.backgroundColor = 'red';
   })
})

var img = document.querySelectorAll('img');
img.forEach((pic) => {
   pic.addEventListener('mouseenter', () => {
      pic.style.border = '5px solid purple';
   })
})

var img = document.querySelectorAll('img');
img.forEach((pic) => {
   pic.addEventListener('mouseleave', () => {
      pic.style.border = 'none';
   })
})

var par = document.querySelectorAll('p');
par.forEach((p) => {
   p.addEventListener('mousedown', () => {
      p.style.color = 'red';
   })
})

var par = document.querySelectorAll('p');
par.forEach((p) => {
   p.addEventListener('mouseup', () => {
      p.style.color = 'dodgerblue';
   })
})

const h2 = document.querySelectorAll('h2');
h2.forEach((header) => {
   header.addEventListener('mousemove', () => {
      header.style.color = 'red';
   })
})

const h4 = document.querySelectorAll('h4');
h4.forEach((header) => {
   header.addEventListener('auxclick', () => {
      header.style.fontSize = '50px';
   })
})

const foot = document.querySelector('footer');
foot.addEventListener('contextmenu', () => {
   foot.style.backgroundColor = "purple";
})