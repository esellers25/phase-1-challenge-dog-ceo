console.log('%c HI', 'color: firebrick')

let dogImageContainer = document.querySelector("#dog-image-container")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
let dogBreeds = document.querySelector("#dog-breeds")

fetch("https://dog.ceo/api/breeds/image/random/4" )
    .then(res => res.json())
    .then(function(dogPictures) {
        let messages = dogPictures.message
        messages.forEach(function(){
            let dogImage = document.createElement("img")
            dogImage.id = "dogImage"
            function randomNumber() {
                let i = Math.floor(Math.random() * messages.length)
                return i
            }
            dogImage.src = messages[randomNumber()]
            dogImageContainer.append(dogImage)
        })
    })
    
fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(function(dogList){
        for (const message in dogList) {
        let breed = (dogList[message]) 
            console.log(breed)
            let dogLi = document.createElement("li")
            dogLi.innerText = breed
            dogBreeds.append(dogLi)
        }    
            
        
        
    })

 
    