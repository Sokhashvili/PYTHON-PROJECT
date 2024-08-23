document.addEventListener("DOMContentLoaded", function() {
    const images = [
        './Porsche 911/image1.webp',
        './Porsche 911/image2.webp',
        './Porsche 911/image3.webp',
        './Porsche 911/image4.webp'
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
                name: "Porsche 911 Turbo S", 
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