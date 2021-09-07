const main = document.querySelector('main')
const input = document.querySelector('.input-form')
const form = document.querySelector('form')
const result = document.querySelector('.result')

let title = document.createElement('h1')
title.innerHTML = 'Binary to Decimal'
main.prepend(title)

form.style.marginTop = '16px'
form.style.marginBottom = '8px'

input.addEventListener('keyup', (e) => {
    const keyCode = e.keyCode || e.which
    if (keyCode !== 48 && keyCode !== 49) {
        result.style.color = 'red'
        result.innerHTML = 'only 1 and 0 allowed'
        input.value = ''
    }else if(e.target.value.length > 8) {
        result.style.color = 'red'
        alert('maximum length of 8')
        result.innerHTML = 'maximum length 8'
        input.value = ''
    } else {
        result.style.color = 'black'
        result.innerHTML = ''
    }
    
})

form.addEventListener('submit', (e) => {
    e.preventDefault() 
    var digit = parseInt(input.value, 2);
    result.innerHTML = `Decimal Value: ${digit}`
})