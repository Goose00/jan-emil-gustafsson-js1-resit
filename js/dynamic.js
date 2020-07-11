const container = document.querySelector(".container");

container.addEventListener("change", addDivs);



function addDivs() {
    console.log("Div was added");

    const numbers = document.querySelector("input");
    const numbersValue = numbers.value;
    console.log(numbersValue);
    const divs = document.querySelector(".dynamic-divs");


    try {
        for (let i = 0; i < numbersValue.length; i++) {

        divs.innerHTML = `<div class="dynamic-divs">Number ${numbersValue}</div>`;
        }

    } catch (error) {
        console.log("error");
    } finally {
        console.log("numbers are fetched");
}

}
addDivs();


/* reset button!

function reset() {
    console.log("button has been pressed");
}




button.addEventListener("click", reset, false);

*/