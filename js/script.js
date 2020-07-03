const url = "https://official-joke-api.appspot.com/random_joke";

async function getJokes() {

        const response = await fetch(url);
        const results = await response.json();

         displayJokes(results);

         console.log(results);
}
getJokes();

function displayJokes(results) {

    const h2 = document.querySelector("h2");

    const jokeSetup = document.querySelector(".setup");

    const jokePunch = document.querySelector(".punchline")

    document.title = results.setup;

    try {

        h2.innerHTML = results.type+" Joke";

        jokeSetup.innerHTML = `<div><p>${results.setup}</p></div>`;
        
        jokePunch.innerHTML = `<div><p>${results.punchline}</p></div>`;

    } catch (error) {
        h2.innerHTML = "There was an error";
    } finally {
        console.log("Jokes are fetched");
    }

}

