console.log('%c HI', 'color: firebrick')

let dogImageContainer = document.querySelector("#dog-image-container")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 


    fetch("https://dog.ceo/api/breeds/image/random/4" )
    .then(res => res.json())
    .then(function(dogPictures) {
        console.log(dogPictures)
        dogPictures.forEach(function(dogPicture){
        let dogImage = document.createElement("img")
        dogImage.id = "dogImage"
        dogImage.src = dogPicture.message
        dogImageContainer.append(dogImage)
        })
    
    })
    


