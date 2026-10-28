document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("service-search");
    const serviceCards = document.querySelectorAll(".service-card");

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const query = searchInput.value.toLowerCase().trim();

            serviceCards.forEach(card => {
                const title = card.querySelector("h3") ? card.querySelector("h3").textContent.toLowerCase() : "";
                const description = card.querySelector("p") ? card.querySelector("p").textContent.toLowerCase() : "";

                if (title.includes(query) || description.includes(query)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }
});