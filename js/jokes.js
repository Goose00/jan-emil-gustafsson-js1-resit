const tenJokesUrl = "https://official-joke-api.appspot.com/random_ten";

fetch(tenJokesUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        getJokes(json);
        
    })
    .catch(function(error) {
        const h1 = document.querySelector("h1");
        h1.innerHTML = "There was an error";
        console.dir(error);
    });

    function getJokes(json) {
        console.dir(json);
        const jokes = json;

        const container = document.querySelector(".results");
        let newHtml = "";

        for (let i = 0; i < jokes.length; i++) {
            if (i === 5) {break; } // I thought i had to stop at 4, but that wasnt the case here, how come?
            let jokeValue = "No joke found";

            if (jokes[i].type) {
                jokeValue = jokes[i].type;
            }
            
            const details = `<div class="col-sm-6 col-md-4 col-lg-3">
                                <div class="card">
                                    <div class="joke-detail">
                                        <h4 class="type">${jokes[i].type}</h4>
                                        <div class="setup">${jokes[i].setup}</div>
                                        <div class="punchline">${jokes[i].punchline}</div>
                                    </div>
                                </div>
                            </div>`
            newHtml += details;

            for (let i = 0; i < jokes.length; i++) {
                if (i === 2) {document.title = jokes[i].setup;}
            }
        }
        container.innerHTML = newHtml;
    }