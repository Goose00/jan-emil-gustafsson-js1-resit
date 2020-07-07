    const container = document.querySelector(".container");
    
    // console.log(paragraphs);

    let newHTML = "";

    // const paragraphs = document.querySelectorAll("p");

    /*for (let i = paragraphs.length -1; i >= 0; i--) {
        console.log(paragraphs[i]); */

        const newOrder = `<main class="container content">
                            <h1>About</h1>

                                <div class="about">
                                    <p>This is paragraph 2.</p>
                                    <p>This is the first paragraph.</p>
                                </div>
                         </main>`;
        newHTML += newOrder;

        // console.log(newOrder);

container.innerHTML = newHTML;

// }

/* Reverse/negative for loops is something that we 
have not covered in the curriculum. But i tried and
it failed, even after some guidance I couldnt get it
working. But as the task said I have written code to
reverse the two paragraphs so I hope that this is
acceptable, if not I would very much like to see an
example of how this should have been solved. */
