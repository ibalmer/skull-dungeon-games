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


const headerLogo = document.querySelector("#header-logo")
const headerLogo1 = document.querySelector("#header-logo-1")
const headerLogo2 = document.querySelector("#header-logo-2")
const libreria = document.querySelector("#root")
const logo = document.querySelector("#main-logo")

headerLogo.addEventListener('click', () => { 
    if 
        (libreria.href.endsWith('dark-root.css')) {      libreria.href = 'root.css';
        } 
        else { 
            libreria.href = 'dark-root.css';
        } 
    if 
        (logo.src.endsWith('images/Logos/LOGO-6.png')) {      logo.src = 'images/Logos/LOGO-7.png';
        } 
        else { 
            logo.src = 'images/Logos/LOGO-6.png';
        } 
    if 
        (headerLogo.src.endsWith('images/Logos/LOGO-3.png')) {headerLogo.src = 'images/Logos/LOGO-4.png';
        } 
        else { 
            headerLogo.src = 'images/Logos/LOGO-3.png';
        } 
    if 
        (headerLogo1.src.endsWith('images/Logos/LOGO-3.png')) {headerLogo1.src = 'images/Logos/LOGO-4.png';
        } 
        else { 
            headerLogo1.src = 'images/Logos/LOGO-3.png';
        }
    if 
        (headerLogo2.src.endsWith('images/Logos/LOGO-3.png')) {headerLogo2.src = 'images/Logos/LOGO-4.png';
        } 
        else { 
            headerLogo2.src = 'images/Logos/LOGO-3.png';
        }
});
headerLogo1.addEventListener('click', () => { 
    if 
        (libreria.href.endsWith('dark-root.css')) {      libreria.href = 'root.css';
        } 
        else { 
            libreria.href = 'dark-root.css';
        } 
    if 
        (logo.src.endsWith('images/Logos/LOGO-6.png')) {      logo.src = 'images/Logos/LOGO-7.png';
        } 
        else { 
            logo.src = 'images/Logos/LOGO-6.png';
        }
    if 
        (headerLogo.src.endsWith('images/Logos/LOGO-3.png')) {headerLogo.src = 'images/Logos/LOGO-4.png';
        } 
        else { 
            headerLogo.src = 'images/Logos/LOGO-3.png';
        } 
    if 
        (headerLogo1.src.endsWith('images/Logos/LOGO-3.png')) {headerLogo1.src = 'images/Logos/LOGO-4.png';
        } 
        else { 
            headerLogo1.src = 'images/Logos/LOGO-3.png';
        }
    if 
        (headerLogo2.src.endsWith('images/Logos/LOGO-3.png')) {headerLogo2.src = 'images/Logos/LOGO-4.png';
        } 
        else { 
            headerLogo2.src = 'images/Logos/LOGO-3.png';
        } 
});
headerLogo2.addEventListener('click', () => { 
    if 
        (libreria.href.endsWith('dark-root.css')) {      libreria.href = 'root.css';
        } 
        else { 
            libreria.href = 'dark-root.css';
        } 
    if 
        (logo.src.endsWith('images/Logos/LOGO-6.png')) {      logo.src = 'images/Logos/LOGO-7.png';
        } 
        else { 
            logo.src = 'images/Logos/LOGO-6.png';
        } 
    if 
        (headerLogo2.src.endsWith('images/Logos/LOGO-3.png')) {headerLogo2.src = 'images/Logos/LOGO-4.png';
        } 
        else { 
            headerLogo2.src = 'images/Logos/LOGO-3.png';
        }
    if 
        (headerLogo1.src.endsWith('images/Logos/LOGO-3.png')) {headerLogo1.src = 'images/Logos/LOGO-4.png';
        } 
        else { 
            headerLogo1.src = 'images/Logos/LOGO-3.png';
        }
    if 
        (headerLogo.src.endsWith('images/Logos/LOGO-3.png')) {headerLogo.src = 'images/Logos/LOGO-4.png';
        } 
        else { 
            headerLogo.src = 'images/Logos/LOGO-3.png';
        }   
});