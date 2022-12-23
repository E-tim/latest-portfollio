

let faBars = document.getElementById('faBars')
let faTimes = document.getElementById('faTimes')
// let faTimes = document.getElementById('faTimes')
let myUl = document.getElementById('myUl')

faBars.addEventListener('click', (e)=> {
    myUl.classList.add('showUl')
})
faTimes.addEventListener('click', (e)=> {
    myUl.classList.remove('showUl')
})


let myLi = document.querySelectorAll('.myLi')
myLi.forEach( li => {
    li.addEventListener('click', ()=> {
        myUl.classList.remove('showUl')
    })
} )


// scrolll up button
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// faTimes.addEventListener('click', (e)=> {
//     myUl.classList.remove('showUl')
// })


// let ulLi = document.querySelectorAll('.ulLi');
// ulLi.forEach( li => {
//     li.addEventListener('click', ()=> {
//         myUl.classList.remove('showUl')
//     })
// } )




