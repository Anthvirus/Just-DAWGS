const imageTags = [];
const images = fetch('https://dog.ceo/api/breeds/image/random/20')
.then( res =>{
    return res.json()
})
.then(images =>{

    // for(var i=0; i<=images.message.length-1; i++){
    //    const imageBox =  document.createElement("img")
    //    imageBox.src = images.message[i]
    //    immageArray.push(images.message[i])
    //    document.getElementById("box").innerHTML = imagTags
    // }
    const imagesArr = images.message;
    const imageTag = imagesArr.map(image => `<img src="${image}">`)
    imageTags.push(imageTag)
    console.log(imageTags)
    document.getElementById("box").innerHTML = imageTag;
})
.catch(error => console.log(error))

