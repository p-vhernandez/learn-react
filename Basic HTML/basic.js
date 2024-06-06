// Vanilla JS

// get the button
const button = document.querySelector('button')

// when clicking, function
button.addEventListener('click', function() {
   // get the html attribute id
   const id = button.getAttribute('data-id')

   // call service to update
   // toggleLike(id)

   if (button.classList.contains('liked')) {
    button.classList.remove('liked')
    button.innerText = 'Me gusta'
   } else {
    button.classList.add('liked')
    button.innerText = 'Quitar me gusta'
   }
})