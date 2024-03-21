const posts = [
    {
      title:'Post One',body:'This is post one'
    },
    {
      title:'Post Two',body:'This is post two'
    }
];
function getPosts() {
        setTimeout(() => {
            let output = "";
            posts.forEach((post,index) => {
                output += `<li>${post.title}</li>`;
            });
            document.body.innerHTML = output;
        }, 1000);
}
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;
            if (!error) {
                resolve();
                
            }
            else {
                reject('Something is not right');
                }
        }, 5000);
    });
    
}
// createPost({ title: 'Post Three', body: 'This is post three' })
//     .then(getPosts)
//     .catch(err=console.log(err));
//Promise All
const promise1 = Promise.resolve('Hello world');
const promise2 = new Promise((resolve, reject) =>
    setTimeout(resolve, 3000, 'Great Job'));
const promise3 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
Promise.all([promise1, promise2, promise3]).then(values => console.log(values));