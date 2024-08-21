document.addEventListener("DOMContentLoaded", function() {
    const images = [
        './AUDI R8 sup/image1.webp',
        './AUDI R8 sup/image2.webp',
        './AUDI R8 sup/image3.webp',
        './AUDI R8 sup/image4.webp'
    ];

    let currentIndex = 0;
    const slideshowImg = document.getElementById('slideshow-img');

    function updateImage() {
        slideshowImg.src = images[currentIndex];
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    }

    document.querySelector('.arrow-left').addEventListener('click', prevImage);
    document.querySelector('.arrow-right').addEventListener('click', nextImage);

    setInterval(nextImage, 5000); 
});

document.addEventListener('DOMContentLoaded', function () {
    const calendar = flatpickr(".calendar-widget", {
        inline: true,
        minDate: "today",
        mode: "range"
    });

    document.getElementById('save-button').addEventListener('click', function () {
        const selectedDates = calendar.selectedDates;
        if (selectedDates.length === 2) {
            const startDate = selectedDates[0];
            const endDate = selectedDates[1];

            const car = {
                name: "AUDI R8",
                startDate: startDate.toLocaleDateString(),
                endDate: endDate.toLocaleDateString()
            };

            let rentedCars = JSON.parse(localStorage.getItem('rentedCars')) || [];

            rentedCars.push(car);

            localStorage.setItem('rentedCars', JSON.stringify(rentedCars));

            alert(`You have rented the car from ${car.startDate} to ${car.endDate}.`);


            window.location.href = '/MyPage.html';
        } else {
            alert('Please select both start and end dates.');
        }
    });

});