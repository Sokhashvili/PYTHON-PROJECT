document.addEventListener("DOMContentLoaded", function() {
    const imageSets = [
        ['cars/card1-image1.webp', 'cars/card1-image2.webp', 'cars/card1-image3.webp', 'cars/card1-image4.webp'],
        ['cars/card2-image1.webp', 'cars/card2-image2.webp', 'cars/card2-image3.webp', 'cars/card2-image4.webp'],
        ['cars/card3-image1.webp', 'cars/card3-image2.webp', 'cars/card3-image3.webp', 'cars/card3-image4.webp'],
        ['cars/card4-image1.webp', 'cars/card4-image2.webp', 'cars/card4-image3.webp', 'cars/card4-image4.webp'],
        ['cars/card5-image1.jpg', 'cars/card5-image2.jpg', 'cars/card5-image3.jpg', 'cars/card5-image4.jpg'],
        ['cars/card6-image1.webp', 'cars/card6-image2.webp', 'cars/card6-image3.webp', 'cars/card6-image4.webp']
    ];

    const currentIndexes = Array(imageSets.length).fill(0);

    function updateImage(cardIndex) {
        const card = document.querySelector(`.card[data-card-index="${cardIndex}"]`);
        const imgElement = card.querySelector('.card-image');
        const imageIndex = currentIndexes[cardIndex];
        imgElement.src = imageSets[cardIndex][imageIndex];
    }

    function prevImage(cardIndex) {
        currentIndexes[cardIndex] = (currentIndexes[cardIndex] - 1 + imageSets[cardIndex].length) % imageSets[cardIndex].length;
        updateImage(cardIndex);
    }

    function nextImage(cardIndex) {
        currentIndexes[cardIndex] = (currentIndexes[cardIndex] + 1) % imageSets[cardIndex].length;
        updateImage(cardIndex);
    }

    document.querySelectorAll('.arrow-left').forEach((arrow, index) => {
        arrow.addEventListener('click', () => prevImage(index));
    });
    document.querySelectorAll('.arrow-right').forEach((arrow, index) => {
        arrow.addEventListener('click', () => nextImage(index));
    });

    imageSets.forEach((_, index) => updateImage(index));
});


function addToBasket(index) {
    const card = document.querySelectorAll('.card')[index];
    const title = card.querySelector('.card-title').innerText;
    const price = card.querySelector('.card-description').innerText;
    const image = card.querySelector('.card-image').src;
    const learnMoreLink = card.querySelector('.btn a').href;

    const basket = JSON.parse(localStorage.getItem('basket')) || [];
    basket.push({ title, price, image, learnMoreLink });
    localStorage.setItem('basket', JSON.stringify(basket));
}

