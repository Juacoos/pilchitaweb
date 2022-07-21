let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target.children[1].children[0].value);
    console.log(e.target.children[2].children[0].value);
    console.log(e.target.children[3].children[0].value);
})

