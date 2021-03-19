var hamburger = document.querySelector('.hamburger')
var sidebar = document.querySelector('.sidebar')

hamburger.addEventListener("click", ()=>toggleMenu())

const toggleMenu = ()=>{
    if(sidebar.classList.contains('.show-sidebar')){
        sidebar.classList.remove('.show-sidebar')
    }else{
        sidebar.classList.add('.show-sidebar')
    }
}