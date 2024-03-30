const backBtn = document.querySelector("#back-button");

backBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = "index.html";
});

//create a light/dark mode toggle
const toggle = document.getElementById('dark-mode');

toggle.addEventListener('click', function() {
    //e.preventDefault();  not needed
    const body = document.body;
    body.classList.toggle('light-mode');
});

//.addEventListener added to the button with the id="dark-mode" through the toggle variable. When 'clicked' the button will switch between light and dark mode styles from the css
//body variable set to the <body> element on the html page so we can modify it
//.classList is a property that provides the .toggle() method that will toggle between light and dark mode by removing or adding the the precense of the light-mode style in CSS



//retreives saved content from local storage and displays it on the blog page. This only displays the last post submitted. Need to edit so all posts get displayed
//content has the key: 'thePost'

// function listPost () {
//     let postArray = JSON.parse(localStorage.getItem('thePost')) || []; //change variable lastPost to postArray
//     //console.log(lastPost);

//     //convert into a for loop to display all posts
//     if (postArray !== null) {
        
//         const postDiv = document.getElementById('post-div');

//         const lineOne = document.createElement('h2');
//         lineOne.innerHTML = postArray.username
//         postDiv.append(lineOne);

//         const lineTwo = document.createElement('h2');
//         lineTwo.innerHTML = postArray.title
//         postDiv.append(lineTwo);

//         const lineThree = document.createElement('p');
//         lineThree.innerHTML = postArray.content
//         postDiv.append(lineThree);   
//     }
// }


//this function is a for loop that will display all posts instead of just the latest
function listPost() {
    let postArray = JSON.parse(localStorage.getItem('thePost')) || [];
    const postDiv = document.getElementById('post-div');

    // Converted into a for loop to display all posts
    for (let i = 0; i < postArray.length; i++) {
        const currentPost = postArray[i];

        //originally wasn't working. Needed to create a second div inside the original div to have something to append to
        const innerPostDiv = document.createElement('div');


        const lineOne = document.createElement('h2');
        lineOne.innerHTML = currentPost.username;
        innerPostDiv.append(lineOne);

        const lineTwo = document.createElement('h2');
        lineTwo.innerHTML = currentPost.title;
        innerPostDiv.append(lineTwo);

        const lineThree = document.createElement('p');
        lineThree.innerHTML = currentPost.content;
        innerPostDiv.append(lineThree);



        // Append the innerPostDiv to the original postDiv
        postDiv.append(innerPostDiv);
    }
}

//blog posts would not display. needed to add id to the postDiv <div>

//blog posts would not display. needed to call it.
listPost();




//my js notes

//the function listPost() retrieves the form data of each new blog entry and appends (displays) it to the blog page

//The variable postArray is either assigned a value from localStorage OR an empty array if there is nothing stored.
//localStorage.getItem('key') retreives the value from local storage for the specified key 'thePost'. JSON.parse() then converts it into a JavaScript object. Multiple objects are will form the elements of an array

//the postDiv constant is asigned the element in html with id=post-div. Each new post that is created will then be appended to this element

//the for loop will iterate (starting at i=0 through the end of the array) through each object of the array
//For each element(object) of the array (postArray[i]) it will create a new <div> called innerPostDiv. Within each innerPostDiv three new elements <h2>, <h2>, <p> are created assigned variables lineOne, lineTwo, lineThree respectively

//each lineOne/lineTwo/lineThree variable then sets the innerHTML of their created HTML elements to the chosen value (from the key-value pairs) of each object inside the currentPost variable

//Then each line is appended to the innerPostDiv. 
//And each innerPostDiv is then appended to the postDiv - displaying each form submission as its own blog post on the page. 


