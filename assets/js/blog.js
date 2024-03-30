const backBtn = document.querySelector("#back-button");

backBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = "index.html";
});