const submenus = document.querySelectorAll('.menu li')

submenus.forEach(submenu => {
    submenu.addEventListener('mouseover', event => {
        event.target.children[1].classList.add('hover')
    })

    submenu.addEventListener('mouseleave', event => {
        event.target.children[1].classList.remove('hover')
    })
})

const buttonMobile = document.querySelector('.button-mobile')

buttonMobile.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active')
})