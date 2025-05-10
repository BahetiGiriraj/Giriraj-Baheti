// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

// document.getElementById("contactForm").addEventListener("submit", function () {
    
//     setTimeout(() => this.reset(), 500);
// });

document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(this);

    try {
        const response = await fetch("https://formsubmit.co/ajax/girirajbaheti31@gmail.com", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            alert("Message sent successfully! Thank you.");
            this.reset(); 
            window.location.href = "./index.html#contact";
        } else {
            alert("Failed to send message. Please try again.");
        }
    } catch (error) {
        alert("An error occurred. Please try again.");
        console.error(error);
    }
});
