//1. collect user data
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => userData(data))
};
function userData(users){
        for(const user of users){
            const userName = user.name;
            console.log(userName);
        }
};
// 2. collect post data
function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => postsData(data))
};

function postsData(posts){
        for(const post of posts){
            const postName = post.title;
            console.log(postName);
        }
};
// 3. collect comment dat
function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => commentData(data))
};
function commentData(comments){
        for(const comment of comments){
            const commentBody = comment.body;
            console.log(commentBody);
        }
};
// 4. collect todos data
function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => todosData(data))
};
function todosData(todos){
        for(const todo of todos){
            const totoTitle = todo.title;
            console.log(totoTitle);
        }
};