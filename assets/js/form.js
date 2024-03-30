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

//calls the submitPost() function then redirects to the blog page when the submit button is clicked
submitPostBtn.addEventListener('click', function(e) {
    e.preventDefault();
    submitPost();
    window.location.href = "blog.html";
});


//my JS notes

//.getElementId is used to return an element with the sepecified id. We then declare a constant for each element
//The subbmitPost function is used to collect the user input from the form saving it to localStorage and then redirects to the blog page.

//The variable postArray is either assigned a value from localStorage OR an empty array if there is nothing stored.
//localStorage.getItem('key') retreives the value from local storage for the specified key 'thePost'. JSON.parse() then converts it into a JavaScript object

//the variable formContent is grouping related data together to form an object with the listed properties (key-value pairs). Each key is assined the text content from the designated field.

//.push pushes the formContent object into the postArray array

//localStorage.set item then stores the updated postArray back into localStorage under 'thePost' key after JSON.stringify converts the array back into a string

//data is being converted into an array after being retrieved and then back into a string before being saved back to localStorage because localStorage cannot store objects or arrays. When retrieving it to be able to edit or work with again it must be parsed back into objects or arrays


//the submit button with the id submit-post is assigned to the submitPostBtn. 
//an .addEventListener of 'click' is added to the submitPostBtn. 
//When the user clicks the button the e.preventDefault() will prevent the default form behavior that would refresh the page. It will then call the submitPost() function that will run the code inside that function. After that the page will then be redirected to blog.html