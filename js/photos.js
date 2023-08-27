fetch('https://jsonplaceholder.typicode.com/photos')
.then(res => res.json())
.then(data => photoData(data))

function photoData(photos){
    // console.log(photos);
    const photoContainer = document.getElementById('photos-container')
    for(const photo of photos){
        const photoDiv  = document.createElement('div');
        photoDiv.classList.add('photo')
        photoDiv.innerHTML=`
        <h2>Id:${photo.id}</h2>
        <h2>Title${photo.title}</h2>
        
        `
        photoContainer.appendChild(photoDiv)
    }
}