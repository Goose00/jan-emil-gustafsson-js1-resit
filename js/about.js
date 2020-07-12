   
   const container = document.querySelector(".about");

    let newHTML = "";

    const paragraphs = document.querySelectorAll("p");

    for (let i = paragraphs.length -1 ; i >= 0; i--) {
        console.log(paragraphs[i]);
        newHTML +=  `<div class="about">
                        <p>${paragraphs[i]}</p>
                    </div>`
    }

    container.innerHTML = newHTML;


/* I have really struggeled with this and got caught up in not making
it work properly. I have asked for help and hav gotten good advice but
I did not manage to apply the tips into my code unfortunately. I really
hope I say "Oh, thats how!" when I se an example of the solution. */