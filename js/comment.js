// all comment collect are here
fetch('https://jsonplaceholder.typicode.com/comments')
.then(res => res.json())
.then(data => commentData(data))

function commentData(comments){
    const commentContainer = document.getElementById('comment-container')
    for(const comment of comments){
        const commentDiv  = document.createElement('div')
        commentDiv.classList.add('comment')
        commentDiv.innerHTML=`
        <h2>Id:${comment.id}</h2>
        <h2>Email:${comment.email}</h2>
        <h4>${comment.body}</h4>
        `
        commentContainer.appendChild(commentDiv)
    }
}