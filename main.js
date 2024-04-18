const hamburgerMajor = document.querySelector('.ham-major-wrapper');
const hamMajItem = document.querySelector('.ham-major-item');
const sideBarOne = document.querySelector('.left-sidebar');
const hamburger = document.querySelector('.hamburger');
const sideBarTwo = document.querySelector('.right-sidebar')
const cancel = document.querySelector(".close");
const overlay = document.querySelector('.overlay')
const wrapper = document.querySelector('.wrapss')
console.log(cancel);

hamburger.addEventListener('click', () => {
    sideBarTwo.classList.add('active')
})

cancel.addEventListener('click', () => {
    sideBarTwo.classList.remove('active');
})
console.log(window);
function closeSidebars(item) {
    wrapper.addEventListener('click', () => {
        item.classList.remove('active');
    })
}

hamburgerMajor.addEventListener('click', () => {
    hamMajItem.classList.toggle('onclick');
    if (hamMajItem.classList.contains('onclick')) {
        sideBarOne.classList.add('active')
        overlay.classList.add('active')
    } else  {
        sideBarOne.classList.remove('active')
        overlay.classList.remove('active')
    }
})

const headers = document.querySelectorAll('.header');
const tabChildren = document.querySelectorAll('.tab-content-child')

headers.forEach((header, index  ) => {
    header.addEventListener('click', () => {
        headers.forEach((h) => {
            if (h !== header) {
                h.classList.remove('active');
            }
        });

        tabChildren.forEach((content) => {
            content.classList.remove('active');
        });
        header.classList.add('active');
        tabChildren[index].classList.add('active');
    })
})