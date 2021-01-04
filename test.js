
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
const allWords = document.querySelectorAll('.word')
const frameWord = document.querySelectorAll('.new-word')

searchInput.addEventListener('keyup', function(event){
    let searchQuery = event.target.value.toLowerCase()
    for (let m=0 ; m < allWords.length ; m++) {
        let currentWord = allWords[m].innerHTML.toLowerCase()
        if (currentWord.includes(searchQuery)) {
            frameWord[m].style.display = "block"
        } else {
            frameWord[m].style.display= "none"
        }
    }
})