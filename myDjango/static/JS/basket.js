let basket = [];


function addToBasket(cardIndex) {
    const card = document.querySelector(`.card[data-card-index="${cardIndex}"]`);
    
    if (!card) {
        console.error(`Card with index ${cardIndex} not found.`);
        return;
    }

    const cardTitle = card.querySelector(".card-title")?.textContent || "Unknown Title";
    const cardPrice = card.querySelector(".card-description")?.textContent || "Unknown Price";
    const cardImage = card.querySelector(".card-image")?.src || "default-image.jpg";
    const learnMoreLink = card.querySelector('.btn a')?.href || "#";

    const cardItem = {
        title: cardTitle,
        price: cardPrice,
        image: cardImage,
        learnMoreLink: learnMoreLink
    };

   
    basket.push(cardItem);


    localStorage.setItem('basket', JSON.stringify(basket));

    alert(`${cardTitle} has been added to your basket!`);
}

window.onload = function() {
    if (localStorage.getItem('basket')) {
        basket = JSON.parse(localStorage.getItem('basket'));
    }
};

document.querySelectorAll('.add-to-basket-button').forEach((button, index) => {
    button.addEventListener('click', () => addToBasket(index));
});