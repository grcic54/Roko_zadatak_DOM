
import { tenisice } from "./podaci.js";

const list = document.querySelector("#list");
const count = document.querySelector("#count");
const empty = document.querySelector("#empty");

function createCard(tenisica) {
    const card = document.createElement("article");
    card.className = "card";
    card.dataset.id = tenisica.id;

    const image = document.createElement("img");
    image.src = tenisica.image;
    image.alt = `Slika tenisica ${tenisica.name}`;
    image.className = "tenisice-image";

    const name = document.createElement("h2");
    name.textContent = tenisica.name;

    const category = document.createElement("p");
    category.textContent = `Kategorija: ${tenisica.category}`;

    const price = document.createElement("p");
    price.textContent = `Cijena: ${tenisica.price} €`;

    const review = document.createElement("p");
    review.textContent = `Ocjena: ${tenisica.review}/5`;

    const opinion = document.createElement("p");
    opinion.textContent = `Mišljenje: ${tenisica.opinion}`;

    const link = document.createElement("a");
    link.href = tenisica.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Pogledaj tenisice";

    card.append(image, name, category, price, review, opinion, link);

    if (tenisica.review === 5) {
        card.classList.add("best");
    }

    return card;
}

function render(items) {
    list.innerHTML = "";

    const fragment = document.createDocumentFragment();

    for (const item of items) {
        fragment.append(createCard(item));
    }

    list.append(fragment);

    count.textContent = `Prikazano tenisica: ${items.length}`;

    empty.classList.toggle("hidden", items.length > 0);
}

// Filtriranje po kategoriji
const filtered = tenisice.filter(
    (tenisica) => tenisica.category === "Košarkaške"
);

// Sortiranje po cijeni
const sorted = [...filtered].sort(
    (a, b) => a.price - b.price
);

// Prikaz tenisica
render(sorted);

// Za provjeru praznog stanja privremeno koristi:
// render([]);
