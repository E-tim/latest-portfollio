



let myBtn = document.querySelector('.myBtn');
let navLink = document.querySelector('.navLink')

// myBtn.addEventListener('click', (e)=> {
//   myBtn.name === 'menu-outline' ? 'close' : 'menu-outline';
//   navLink.classList.toggle('top-[100px]')
// })

function myClick(e) {
    e.name = e.name === 'menu-outline' ? 'close' : 'menu-outline';
    navLink.classList.toggle('top-[100px]')
}





