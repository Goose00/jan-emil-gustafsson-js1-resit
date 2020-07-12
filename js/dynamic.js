const container = document.querySelector(".container");

container.addEventListener("change", addDivs);



function addDivs() {
    console.log("Div was added");

    const numbers = document.querySelector("input");
    const numbersValue = numbers.value;
    console.log(numbersValue);
    const divs = document.querySelector(".dynamic-divs");

/* I really tried figuring this out, my mistake I think is I am overthinking and need
to see this in an example again to fully grasp it. But I´m happy I got the one div and
the reset button working */
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


// reset button!

const button = document.querySelector("button.reset");

function reset() {
    console.log("button has been pressed");

    click = document.querySelector(".dynamic-divs").innerHTML = " ";
}




button.addEventListener("click", reset, true);

