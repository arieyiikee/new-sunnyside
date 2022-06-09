const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.navigation__links')

hamburger.addEventListener('click', () => {
    if (navLinks.style.display === 'flex'){
        navLinks.style.display = 'none'
    }else{
        navLinks.style.display = 'flex'
    }
})
