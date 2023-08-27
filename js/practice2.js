// collect all user data
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => userData(data))

function userData(users){
        const divContainer = document.getElementById('header-container');

        for(const user of users){
            const divUser  = document.createElement('div');
            divUser.classList.add('user')
            divUser.innerHTML=`
            <h2 class='text-2xl font-semibold'>Id:${user.id}</h2>
            <h3 class='text-xl my-4'>Title:${user.title}</h3>
            <h5>Body:${user.body}</h5>
            `
            divContainer.appendChild(divUser)
        }
        
};