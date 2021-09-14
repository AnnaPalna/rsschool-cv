document.addEventListener("DOMContentLoaded", function() {
    const icon = document.querySelector('.menu-icon')
    const mobileNav = document.querySelector('.mobile-nav')

    if (icon) {
        icon.addEventListener('click', () => {
            mobileNav.classList.toggle("open")
        })

    }

});