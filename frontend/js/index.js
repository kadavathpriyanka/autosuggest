let isMale = true;

function toggleCard()
{
    const img = document.querySelector(".card img");
    const name = document.querySelector(".card h2");
    const gender = document.querySelector(".card p");

    if ( isMale ) {
        img.src = "../images/woman.png"; // female image
        name.textContent = "Priyanka";
        gender.textContent = "Female";
    } else {
        img.src = "../images/john.png"; // male image
        name.textContent = "John";
        gender.textContent = "Male";
    }

    isMale = !isMale;
}