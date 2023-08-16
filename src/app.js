const $sectionChangeable = document.getElementById('section-changeable'),
    templates = [],
    imagesRoots = [
        "https://images.unsplash.com/photo-1688591407360-724e6b8cdbee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTgyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60",
        "https://images.unsplash.com/photo-1688732252178-d73dddea8464?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTQzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60",
        "src/assets/TiziDev3.png",
        "https://images.unsplash.com/photo-1688550608780-700bd9bd0bb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjA0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60",
        "https://images.unsplash.com/photo-1688933887296-2452acf991dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Njd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60",
        "https://images.unsplash.com/photo-1688759971565-e695af06cc13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NzJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60",
        "https://images.unsplash.com/photo-1688759973983-fa77fec09bf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTM0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60",
        "https://images.unsplash.com/photo-1688649720968-9f2d3c81d458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTE3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60"
    ],
    homeLink = document.getElementById("home-link"),
    proyectLink = document.getElementById("proyects-link"),
    contactLink = document.getElementById("contact-link");

let homeTemplate = `
<div class="gallery-container">
    <div class="gallery">
        <section class="column column-1">
            <img src="${imagesRoots[0]}">
            <img src="${imagesRoots[1]}">
        </section>

        <section class="column column-2">
            <img src="${imagesRoots[2]}">
            <img src="${imagesRoots[3]}">
        </section>

        <section class="column column-3">
            <img src="${imagesRoots[4]}">
            <img src="${imagesRoots[5]}">
        </section>

        <section class="column column-4">
            <img src="${imagesRoots[6]}">
            <img src="${imagesRoots[7]}">
        </section>
    </div>
</div>
`
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
                <button class="button">SEE CODE</button>
            </section>
            
            <section class="proyect">
                <div class="proyect__img-container">
                    <img src="${imagesRoots[3]}" alt="proyect-2">
                </div>
                <h2 class="title">Gallery</h2>
                <p class="desc">this is a gallery</p>
                <button class="button">SEE CODE</button>
            </section>
        </section>

        <section class="proyects__column">
            <section class="proyect">
                <div class="proyect__img-container">
                    <img src="${imagesRoots[2]}" alt="proyect-3">
                </div>
                <h2 class="title">Gallery</h2>
                <p class="desc">this is a gallery</p>
                <button class="button">SEE CODE</button>
            </section>

            <section class="proyect">
                <div class="proyect__img-container">
                    <img src="${imagesRoots[4]}" alt="proyect-3">
                </div>
                <h2 class="title">Gallery</h2>
                <p class="desc">this is a gallery</p>
                <button class="button">SEE CODE</button>
            </section>
        </section>

        <section class="proyects__column">
            <section class="proyect">
                <div class="proyect__img-container">
                    <img src="${imagesRoots[5]}" alt="proyect-3">
                </div>
                <h2 class="title">Gallery</h2>
                <p class="desc">this is a gallery</p>
                <button class="button">SEE CODE</button>
            </section>

            <section class="proyect">
                <div class="proyect__img-container">
                    <img src="${imagesRoots[6]}" alt="proyect-3">
                </div>
                <h2 class="title">Gallery</h2>
                <p class="desc">this is a gallery</p>
                <button class="button">SEE CODE</button>
            </section>
        </section>
    </div>
</div>
`
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
                <input type="email" placeholder="Your message">

                <button type="submit">SEND</button>
            </form>
        </div>
        <div class="or-separator">or</div>
        <div class="other-contact-container">
            <div class="logos">
                <a class="link" href="http://www.x.com/tizidevscripter">
                    <img src="src/assets/twitter-x.svg">
                </a>

                <a class="link" href="http://www.instagram.com/tizianomontenegro07">
                    <img src="src/assets/instagram.svg">
                </a>
            </div>
        </div>
    </div>
</div>
`
const changeView = function (element, template) {
    element.innerHTML = template
}

// INITIAL TEMPLATE TO INITIALIZED APP
$sectionChangeable.innerHTML = proyectsTemplate

// CHANGE VIEW
homeLink.addEventListener('click', ()=>{
    changeView($sectionChangeable, homeTemplate)
})
proyectLink.addEventListener('click', ()=>{
    changeView($sectionChangeable, proyectsTemplate)
})
contactLink.addEventListener('click', ()=>{
    changeView($sectionChangeable, contactTemplate)
})