const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submitPostBtn = document.getElementById('submit-post');

//saves user submitted form content to localStorage
function submitPost() {
    let postArray = JSON.parse(localStorage.getItem('thePost')) || [];

    const formContent = {
        username: username.value,
        title: title.value,
        content: content.value
    }

    postArray.push(formContent);

    localStorage.setItem('thePost', JSON.stringify(postArray));
}

submitPostBtn.addEventListener('click', function(e) {
    e.preventDefault();
    submitPost();
    window.location.href = "blog.html";
});


//my JS notes

//.getElementId is used to return an element with the sepecified id. We then declare a constant for each element

//A function is usedto collect the user input from the form and save it to localStorage.
