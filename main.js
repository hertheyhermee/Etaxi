const hamburgerMajor = document.querySelector('.ham-major-wrapper');
const hamMajItem = document.querySelector('.ham-major-item');

hamburgerMajor.addEventListener('click', () => {
    hamMajItem.classList.toggle('onclick');
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