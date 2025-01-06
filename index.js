const navBar = document.querySelector('#nav-bar');
const burguer = document.querySelector('#burguer-button');
const closer = document.querySelector('#close-button');
const home = document.querySelector('#home');
const games = document.querySelector('#games');
const sources = document.querySelector('#sources');
const nos = document.querySelector('#nos');
const contact = document.querySelector('#contact');

burguer.addEventListener("click", () => {
    navBar.classList.remove("none");
})

closer.addEventListener("click", () => {
    navBar.classList.add("none");
})

home.addEventListener("click", () => {
    navBar.classList.add("none");
});

games.addEventListener("click", () => {
    navBar.classList.add("none");
});

sources.addEventListener("click", () => {
    navBar.classList.add("none");
});

nos.addEventListener("click", () => {
    navBar.classList.add("none");
});

contact.addEventListener("click", () => {
    navBar.classList.add("none");
});