//MENU TOGGLE
const toggle_menu = document.querySelectorAll('nav .toggle-menu')

// DOM (Document Object Mode)
const nav = document.querySelector('#header nav')

for (element of toggle_menu) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

//AUTO CLOSE MENU SYSTEM + GO TO LINK
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//SCROLL SHADOW

const header = document.querySelector('#header')
const headerHeight = header.offsetHeight

function ChangeHeaderShadowWhenScroll() {
  if (window.scrollY >= headerHeight) {
    //scrollY bigger than header height
    header.classList.add('scroll')
  } else {
    //scrollY smaller than header height
    header.classList.remove('scroll')
  }
}

//SWIPER

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    1200: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

//scrollreveal

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
#home .text, #home .homeimg,
#about .text, #about .aboutimg,

#services header, #services .option,
#depositions header, #depositions .depositionroad,
#contact .text, #contact .links
#footer .footerlogo, #footer .footertext
`,
  {
    interval: 100
  }
)

//-----ARROW BACK TO THE HOME

function ArrowBackToTheHome() {
  const ArrowUp = document.querySelector('.back-to-home')
  if (window.scrollY >= 600) {
    ArrowUp.classList.add('show')
  } else {
    ArrowUp.classList.remove('show')
  }
}

//-----ACTIVE MENU ACCORDING TO THE PAGE SECTION

const sections = document.querySelectorAll('main section[id]') //(get all sections that has an id)

function activeMenuAccordingTheSection() {
  const checkpointSection = window.pageYOffset + (innerHeight / 8) * 4

  for (const Section of sections) {
    const SecTop = Section.offsetTop
    const SecHeight = Section.offsetHeight
    const SecId = Section.getAttribute('id')

    const CheckTop = checkpointSection >= SecTop
    const CheckBottom = checkpointSection <= SecTop + SecHeight

    if (CheckTop && CheckBottom) {
      document
        .querySelector('nav ul li a[href*=' + SecId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + SecId + ']')
        .classList.remove('active')
    }
  }
}

//----- EVERY SCROLL EVENT LISTENER -----

window.addEventListener('scroll', function () {
  ChangeHeaderShadowWhenScroll()
  ArrowBackToTheHome()
  activeMenuAccordingTheSection()
})
