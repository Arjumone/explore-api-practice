fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => userData(data))
function userData(users){
    const userContainer  =document.getElementById('user-container')
    for(const user of users){
        const userDiv  = document.createElement('div');
        userDiv.classList.add('user')
    userDiv.innerHTML=`
    <h3>Id:${user.id}</h3>
    <h3>Street:${user.address.street}</h3>
    <h3>City:${user.address.city}</h3>
    <h3>${user.address.geo.lng}</h3>
    `
    userContainer.appendChild(userDiv);
    }
}