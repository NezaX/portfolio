const openPopUp = document.querySelectorAll(".button__comment");
const closePopUp = document.getElementById("pop_up_close");
const popUp = document.getElementById("pop_up");

openPopUp.forEach(button => button.addEventListener("click", function (e) {
    e.preventDefault();
    popUp.classList.add("active");
}))
closePopUp.addEventListener("click", () => {
    popUp.classList.remove("active");
})






document
    .querySelectorAll(".nav__left")
    .forEach(link => link
        .addEventListener('click',
            (e) => {
                e.preventDefault()
                const { target } = e
                document
                    .querySelector(target.getAttribute('href'))
                    .scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    })
            }))



