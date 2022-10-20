

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
// faTimes.addEventListener('click', (e)=> {
//     myUl.classList.remove('showUl')
// })


// let ulLi = document.querySelectorAll('.ulLi');
// ulLi.forEach( li => {
//     li.addEventListener('click', ()=> {
//         myUl.classList.remove('showUl')
//     })
// } )




