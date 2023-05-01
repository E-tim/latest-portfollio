



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



let observes = document.querySelectorAll('.observe')

const option = {
    threshold: .5,
    rootMargin: '0px 0px 0px 0px'
}
const projectList = new IntersectionObserver( (entries, projectList)=>{
    entries.forEach(project => {
        if(!project.isIntersecting){
            return;
        } else {
            let par = document.createComment('p')
            
        }
    });
} , option)

async function inter_sect(entries, dosOpacity) {
    for( let entry of entries) {
        if(!entry.isIntersecting) {
            return;
        } else {
            await delay(200)
            entry.target.classList.add('eachDos-observer')
            dosOpacity.unobserve(entry.target)
        }
    } 
}




