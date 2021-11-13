const modal = document.querySelector('.modal')
const seila = document.querySelector('.blur')


function closeModal() {
  seila.style.display = 'none'
  modal.style.display = 'none'
  
}

const button = document.querySelectorAll('.modalOpen')

button.forEach((b) => {
  const index = b.getAttribute('data-id')
  const { name } = skills[index]

  b.addEventListener('click', (event) => {
    seila.style.display = 'flex'
    event.preventDefault()
    modal.style.display = 'flex'
    modal.innerHTML = `
    <button class="close" onclick="closeModal()">X</button>
    ${name}

    `
  })

})

feather.replace()


/* const audio = document.querySelector('audio')
window.onload = function music() {
  audio.play()
} */