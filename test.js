
const openModal = document.querySelectorAll('#open-modal')
const closeModal = document.querySelectorAll('#close-modal')
const meaningDiv = document.querySelectorAll('#meaning-div')
for (let i=0 ; i<openModal.length ; i++) {
    openModal[i].addEventListener('click', function(){
        meaningDiv[i].style.display = 'block'
    }) 
}

for (let i=0 ; i<closeModal.length ; i++) {
    closeModal[i].addEventListener('click', function(){
        meaningDiv[i].style.display = 'none'
    })
   
}