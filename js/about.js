

function reverse(n) {
    const kids = n.childNodes;
    const numKids = kids.length;

    for (let i = numKids-1; i >= 0; i--) {
        const c = n.removeChild(kids[i]);
        n.appendChild(c);
    }
}   
reverse();


/*
    function reverse(n) {
        const container = document.querySelector(".about").childNodes;
        console.log(container);
    
    for (let i = container-1 ; i >= 0; i--) {
        console.log(container[i]);
        const c = n.removeChild(container[i]);
        console.log(c);
        n.appendChild(c);
        console.log(c);
        
    }

}
   reverse();
   */
    /*
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

    */
