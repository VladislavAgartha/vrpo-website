let total = 0
let totalPrice = 0
let bookedSeats = []

const buyTicket = document.querySelector('.button')
const nums = document.querySelectorAll('.number')

for (let i = 0; i <= nums.length; i++) {
    nums[i].addEventListener('click', showBookPlace)
}

function showBookPlace() {
    const selectedSeats = document.querySelectorAll('.selected')
    const modal = document.querySelector('.modal')
    if (this.classList.contains('booked')) {
        return
    }
    if (this.classList.contains('selected')) {
        this.classList.remove('selected')
        modal.style.opacity = 0
        setTimeout(() => {modal.style.display = 'none'}, 200)
        return
    }
    else {
        selectedSeats.forEach(el => {el.classList.remove('selected')})
        this.classList.add('selected')
    }
    this.parentElement.appendChild(modal)
    modal.style.display = 'block'
    setTimeout(() => {modal.style.opacity = 1}, 200)
}

function bookPlace() {
    const modal = document.querySelector('.modal')
    let place = document.querySelector('.number.selected')
    place.classList.add('booked')
    place.classList.remove('selected')
    modal.style.opacity = 0
    setTimeout(() => {modal.style.display = 'none'}, 200)
    total += 1
    totalPrice += 10
    bookedSeats.push(place.textContent)
    updateInfo()
}

function updateInfo() {
    let bookedInfo = document.querySelector('.bookedInfo span')
    let priceInfo = document.querySelector('.priceInfo span')
    let seatsInfo = document.querySelector('.seatsInfo span')
    bookedInfo.innerHTML = total
    priceInfo.innerHTML = totalPrice
    seatsInfo.innerHTML = bookedSeats
}