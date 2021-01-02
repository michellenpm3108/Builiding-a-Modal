
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

const searchInput = document.getElementById('searchInput')
searchInput.addEventListener('keyup', function(event){
    let userSearch = event.target.value.toLowerCase();

    const allWordsDomCollection = document.querySelectorAll('.word')
    
    
    for (let counter=0 ; counter<allWordsDomCollection.length ; counter++) {
        let currentWord = allWordsDomCollection[counter].textContent.toLowerCase()

        let wordFrame = document.querySelectorAll('.new-word')
    
            if (currentWord.includes(userSearch)){
                wordFrame[counter].style.display='block'
            } else {
                wordFrame[counter].style.display='none'
            }
        }
})