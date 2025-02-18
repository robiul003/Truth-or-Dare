function spreadCards() {
    document.getElementById("cardDeck").classList.add("hidden");
    document.getElementById("cardsContainer").classList.remove("hidden");
}

function flipCard(card, type, imgSrc) {
    if (!card.classList.contains("flipped")) {
        card.style.backgroundImage = `url(${imgSrc})`;
        card.innerHTML = `<p style="background:black; color:white; padding:5px; border-radius:5px;">${type}</p>`;
        card.classList.add("flipped");
    }
}
