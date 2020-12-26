const overlay = document.getElementById('overlay')
const openModal = document.getElementById('open-modal')
const modalOne= document.getElementById('modal-one')
const closeModal = document.getElementById('close-modal')


overlay.style.display='none'
openModal.addEventListener('click', function(){
    overlay.style.display='block'
})
closeModal.addEventListener('click', function(){
    overlay.style.display='none'
})
