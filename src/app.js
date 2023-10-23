"strict mode";
const $sectionChangeable = document.getElementById('section-changeable'),
    templates = [],
    imagesRoots = [
        "src/assets/images/TiziDev3.png",
        "https://github.com/tizielpro/formGreen/raw/main/preview.png"
    ],
    homeLink = document.getElementById("home-link"),
    proyectLink = document.getElementById("proyects-link"),
    contactLink = document.getElementById("contact-link"),
    imagesLogos = {
        github: "src/assets/logos/github.svg",
        twitter: "src/assets/logos/twitter.svg",
        instagram: "src/assets/logos/instagram.svg",
        githubDarkMode: "src/assets/logos/github-darkmode.svg",
        twitterDarkMode: "src/assets/logos/twitter-darkmode.svg",
        instagramDarkMode: "src/assets/logos/instagram-darkmode.svg",
    },
    logoGithub = document.getElementById("logo-github"),
    darkModeButton = document.getElementById("button-darkmode");
    
let twitterLogoToChange = imagesLogos.twitter, 
    instagramLogoToChange = imagesLogos.instagram,
    darkBoolean = false;
// let galleryTemplate = `
// <div class="gallery-container">

//     <div class="gallery">
//         <section class="column column-1">
//             <img src="${imagesRoots[0]}">
//             <img src="${imagesRoots[1]}">
//         </section>


//         <section class="column column-2">
//             <img src="${imagesRoots[2]}">
//         </section>

//         <section class="column column-4">
//             <img src="${imagesRoots[6]}">
//             <img src="${imagesRoots[7]}">
//         </section>
//     </div>
// </div>
// `
function changeView (element, template) {
    element.innerHTML = template
}


{/* const rootStyles = document.documentElement.style;
rootStyles.setProperty('--br','0px') */}


// TEMPLATES
let homeTemplate = `
<div class="home-container">
    <h1>Full Stack Web Developer</h1>
    <p>¡¡¡Hello there!!!, my name is Tiziano Montenegro, I was born in Argentina, I started programming when I was 15, I love completing programming logic challenges, learning new technologies, making friends.</p>
    <h2>My Skills:</h2>
    <article class="skills">
        <img src="https://cdn.iconscout.com/icon/free/png-512/free-html-3628838-3030115.png?f=webp&w=256" alt="HTML">
        <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="CSS">
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="JavaScript">
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" alt="TypeScript">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" alt="ReactJS">
        <img src="https://cdn.worldvectorlogo.com/logos/redux.svg" alt="Redux">
        <img src="https://cdn.worldvectorlogo.com/logos/nodejs-1.svg" alt="NodeJS">
        <img src="https://cdn.worldvectorlogo.com/logos/git-icon.svg" alt="Git">
        <img src="https://cdn.worldvectorlogo.com/logos/sqlite.svg" alt="SQLite">
    </article>
</div>
`;
let proyectsTemplate = `
<div class="proyects-container">
    <div class="proyects">
        <section class="proyects__column">
            <section class="proyect">
                <div class="proyect__img-container">
                    <img src="${imagesRoots[1]}" alt="proyect-1">
                </div>
                <h2 class="title">Gallery</h2>
                <p class="desc">this is a gallery</p>
                <button class="button-hovered"><span>SEE CODE</span></button>
            </section>
            
            <section class="proyect">
                <div class="proyect__img-container">
                    <img src="${imagesRoots[1]}" alt="proyect-2">
                </div>
                <h2 class="title">Gallery</h2>
                <p class="desc">this is a gallery</p>
                <button class="button-hovered"><span>SEE CODE</span></button>
            </section>
        </section>

        <section class="proyects__column">
            <section class="proyect">
                <div class="proyect__img-container">
                    <img src="${imagesRoots[1]}" alt="proyect-3">
                </div>
                <h2 class="title">Gallery</h2>
                <p class="desc">this is a gallery</p>
                <button class="button-hovered"><span>SEE CODE</span></button>
            </section>

            <section class="proyect">
                <div class="proyect__img-container">
                    <img src="${imagesRoots[1]}" alt="proyect-3">
                </div>
                <h2 class="title">Gallery</h2>
                <p class="desc">this is a gallery</p>
                <button class="button-hovered"><span>SEE CODE</span></button>
            </section>
        </section>

        <section class="proyects__column">
            <section class="proyect">
                <div class="proyect__img-container">
                    <img src="${imagesRoots[1]}" alt="proyect-3">
                </div>
                <h2 class="title">Gallery</h2>
                <p class="desc">this is a gallery</p>
                <button class="button-hovered"><span>SEE CODE</span></button>
            </section>

            <section class="proyect">
                <div class="proyect__img-container">
                    <img src="${imagesRoots[1]}" alt="proyect-3">
                </div>
                <h2 class="title">Gallery</h2>
                <p class="desc">this is a gallery</p>
                <button class="button-hovered"><span>SEE CODE</span></button>
            </section>
        </section>
    </div>
</div>
`;
let contactTemplate = `
<div class="contact-container">
    <div class="forms-container">
        <div class="form-container">
            <h2>Contact me</h2>

            <form class="form" novalidate>
                <h3>Send me a message</h3>

                <label>Name:</label>
                <input type="text" placeholder="Your name">

                <label>Email:</label>
                <input type="email" placeholder="Your email">

                <label>Message:</label>
                <textarea placeholder="Your message"></textarea>

                <button class="button-hovered" type="submit"><span>SEND</span></button>
            </form>
        </div>
        <div class="or-separator">
            <span>or</span>
        </div>
        <div class="other-contact-container">
            <div class="logos">
                <a class="link" target="_blank" href="http://www.x.com/tizidevscripter">
                    <img id="logo-twitter" src="${twitterLogoToChange}" alt="logo-twitter"/>
                </a>

                <a class="link" target="_blank" href="http://www.instagram.com/tizianomontenegro07">
                    <img id="logo-instagram" src="${instagramLogoToChange}" alt="logo-instagram"/>
                </a>
            </div>
        </div>
    </div>
</div>
`;
const logoTwitter = document.getElementById("logo-twitter"),
logoInstagram = document.getElementById("logo-instagram");

function activeDarkMode () {
    if(darkBoolean == false) {
        document.documentElement.style.setProperty('--color1', '#111');
        document.documentElement.style.setProperty('--color2', '#eee');
        document.documentElement.style.setProperty('--primary-color','#0af');
        document.documentElement.style.setProperty('--secondary-color','#0cf');
    
        logoGithub.src = imagesLogos.githubDarkMode;
        // document.getElementById('logo-twitter').src = imagesLogos.twitterDarkMode;
        // document.getElementById('logo-instagram').src = imagesLogos.instagramDarkMode;

        darkBoolean = true;
    }
    else {
        document.documentElement.style.setProperty('--color1', '#fff');
        document.documentElement.style.setProperty('--color2', '#111');
        document.documentElement.style.setProperty('--primary-color','#fa0');
        document.documentElement.style.setProperty('--secondary-color','#fc0');
        
        logoGithub.src = imagesLogos.github;
        // document.getElementById('logo-twitter').src = imagesLogos.twitter;
        // document.getElementById('logo-instagram').src = imagesLogos.instagram;
        console.log(logoGithub);
        darkBoolean = false;
    }
}
// CHANGE VIEW
homeLink.addEventListener('click', ()=> changeView($sectionChangeable, homeTemplate));
proyectLink.addEventListener('click', ()=> changeView($sectionChangeable, proyectsTemplate));
contactLink.addEventListener('click', ()=> changeView($sectionChangeable, contactTemplate));

// CHANGE TO DARK MDOE
darkModeButton.addEventListener('click', ()=> activeDarkMode());

// INITIAL TEMPLATE TO INITIALIZED APP
$sectionChangeable.innerHTML = homeTemplate;

logoGithub.src = imagesLogos.github;