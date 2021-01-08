const meaningBtn = document.getElementsByClassName('meaning-btn')
const closeMeaningBtn = document.getElementsByClassName('close-meaning-btn')
const meaningDiv = document.getElementsByClassName('meaning-div')

for (let i=0 ; i < meaningBtn.length ; i++) {
    meaningBtn[i].addEventListener('click', function(){
        meaningDiv[i].style.display='block'
    })
}
for (let i=0 ; i < closeMeaningBtn.length ; i++) {
    closeMeaningBtn[i].addEventListener('click', function(){
        meaningDiv[i].style.display='none'
    })
}


const searchInput = document.getElementById('searchInput')
const wordFrame = document.querySelectorAll('.new-word')
const allWords = document.querySelectorAll('.word')
searchInput.addEventListener('keyup', function(event){
    const searchQuery = event.target.value.toLowerCase();
    for (let i=0 ; i < allWords.length ; i++) {
        const currentWord = allWords[i].innerHTML.toLowerCase()
        if (currentWord.includes(searchQuery)){
            wordFrame[i].style.display='block'
        } else {
            wordFrame[i].style.display='none'
        }
    }

})