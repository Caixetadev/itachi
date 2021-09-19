const modal = document.querySelector('.modal')

function closeModal() {
  modal.style.display = 'none'
}

const button = document.querySelectorAll('.modalOpen')

button.forEach((b) => {

  b.addEventListener('click', (event) => {
    event.preventDefault()
    modal.style.display = 'block'
  })

})

// const btn = document.querySelector('button')
// const audio = document.querySelector('audio')

// btn.addEventListener('click', () => {
//   audio.pause
// })