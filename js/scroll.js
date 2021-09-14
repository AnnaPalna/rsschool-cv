document.addEventListener("DOMContentLoaded", function() {
const anchors = document.querySelectorAll('.nav__list a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
  e.preventDefault()
   
  const blockID = anchor.getAttribute('href').substr(1)
  console.log(blockID)
   
  document.getElementById(blockID).scrollIntoView({
  behavior: 'smooth',
  block: 'start'
  })
  })
}

const icon = document.querySelector('.menu-icon')
if (icon) {
    const mobileAnchors = document.querySelectorAll('.mobile_list a[href*="#"]')
    for (let mobileAnchor of mobileAnchors) {
        mobileAnchor.addEventListener('click', function (e) {
        e.preventDefault()
         
        const blockID = mobileAnchor.getAttribute('href').substr(1)
        console.log(blockID)
         
        document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        })
        })
      }

}



})