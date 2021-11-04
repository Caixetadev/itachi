const modal = document.querySelector('.modal')


function closeModal() {
  modal.style.display = 'none'
}

const button = document.querySelectorAll('.modalOpen')

button.forEach((b) => {
  const index = b.getAttribute('data-id')
  const { name } = skills[index]

  b.addEventListener('click', (event) => {
    event.preventDefault()
    modal.style.display = 'flex'
    modal.innerHTML = `
    <button class="close" onclick="closeModal()">X</button>
    ${name}

    `
  })

})


/* const audio = document.querySelector('audio')
window.onload = function music() {
  audio.play()
} */