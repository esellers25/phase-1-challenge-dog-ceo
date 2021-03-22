console.log('%c HI', 'color: firebrick')

let dogImageContainer = document.querySelector("#dog-image-container")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
let dogBreeds = document.querySelector("#dog-breeds")
let dogUl = document.querySelector("#dog-breeds")
dogUl.className = "dog-list"

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
<<<<<<< HEAD
    .then(function(dogList) {
        let breeds = (Object.keys(dogList.message))
            breeds.forEach(function(breed){
                let dogLi = document.createElement("li")
                 dogLi.innerText = breed
                 dogLi.className = "dog-breeds"
                 dogBreeds.append(dogLi)
                 dogLi.addEventListener("click", function(){
                    dogLi.style.color = "red"
                 })
                })
            })      
=======
    .then(function(dogList){
        for (const message in dogList) {
        let breed = (dogList[message]) 
            console.log(breed)
            let dogLi = document.createElement("li")
            dogLi.innerText = breed
            dogBreeds.append(dogLi)
        }    
            
        
        
    })

 
    
>>>>>>> d3db9a532f4e806557d6f7b9f58367f08d9fec66
