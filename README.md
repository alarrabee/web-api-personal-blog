Boot Camp Module 4 Challenge

## Description
This is the week 4 Module Challenge for the U of M Coding Bootcamp.

## Web APIs: Personal Blog
This challenge was to build a two-page website where users will input and view blog posts. The challenge required building a content form, dynamically rendering blog posts, and implementing a light/dark mode toggle.

### User Story
```md
AS A marketing student,
I WANT a personal blog
SO THAT I can showcase my thoughts and experiences.
```

### Acceptance Criteria
```md
GIVEN a personal blog
WHEN I load the app,
THEN I am presented with the landing page containing a form with labels and inputs for username, blog title, and blog content.
WHEN I submit the form,
THEN blog post data is stored to localStorage.
WHEN the form submits,
THEN I am redirected to the posts page.
WHEN I enter try to submit a form without a username, title, or content,
THEN I am presented with a message that prompts me to complete the form.
WHEN I view the posts page,
THEN I am presented with a header, with a light mode/dark mode toggle, and a "Back" button.
WHEN I click the light mode/dark mode toggle,
THEN the page content's styles update to reflect the selection.
WHEN I click the "Back" button,
THEN I am redirected back to the landing page where I can input more blog entries.
WHEN I view the main content,
THEN I am presented with a list of blog posts that are pulled from localStorage.
WHEN I view localStorage,
THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.
WHEN I take a closer look at a single blog entry in the list,
THEN I can see the title, the content, and the author of the post.
WHEN I view the footer,
THEN I am presented with a link to the developer's portfolio.
```

## Website
(https://alarrabee.github.io/web-api-personal-blog/)

## Page Functionality

### The landing page where the user fills out the form with the desired content of their post.
![image](https://github.com/alarrabee/web-api-personal-blog/assets/149320486/3d40437f-c374-4f3e-bef6-098e71f0b5bf)

### The blog page displays the user submitted posts.
![image](https://github.com/alarrabee/web-api-personal-blog/assets/149320486/f93e239d-6fc8-4435-aefb-ef23c32f2caf)

### Clicking the lightbulb button allows the user to switch between a light and dark mode style.
![image](https://github.com/alarrabee/web-api-personal-blog/assets/149320486/cce0fd9a-1d70-49c8-a70f-ce8d37d56806)


## Possible Improvements and Next Steps
Update the layout and css styles to make the application more polished and professional. 

## Acknowledgments
Guidance provided by edX Web Development Tutor Team (Megan Meyers), and K.Otterness.
