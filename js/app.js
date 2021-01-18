const hamburger = document.querySelector('.hamburger')
const close = document.querySelector('.close')
const nav = document.querySelector('nav')
const imgWrapper = document.querySelector('.imgWrapper')
const totalImgs = document.querySelectorAll('.imgWrapper > *').length
const leftSlide = document.querySelector('.leftSlide')
const rightSlide = document.querySelector('.rightSlide')
const contentTitle = document.querySelector('.contentTitle')
const contentDesc = document.querySelector('.contentDesc')

const content = [
    { "Discover innovative ways to decorate": "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love." },
    { "We are available all across the globe": "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today." },
    {"Manufactured with the best materials": "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."}
]

contentTitle.innerText = Object.keys(content[0])
contentDesc.innerText = Object.values(content[0])


// Hamburger button
hamburger.addEventListener('click', () => {
    nav.classList.add('active')
})
close.addEventListener('click', () => {
    nav.classList.remove('active')
})

let counter = 0

leftSlide.addEventListener('click', () => {
    if (counter <= 0) return
    counter -= 1
    imgWrapper.style.transform = `translateX(${-100 * counter}%)`
    contentTitle.innerText = Object.keys(content[counter])
    contentDesc.innerText = Object.values(content[counter])

})

rightSlide.addEventListener('click', () => {
    if (counter >= totalImgs - 1) return
    counter += 1
    imgWrapper.style.transform = `translateX(${-100 * counter}%)`
    contentTitle.innerText = Object.keys(content[counter])
    contentDesc.innerText = Object.values(content[counter])

})