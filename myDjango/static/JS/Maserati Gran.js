document.addEventListener("DOMContentLoaded", function() {
    const images = [
        './Maserati Gran/image1.jpg',
        './Maserati Gran/image2.jpg',
        './Maserati Gran/image3.jpg',
        './Maserati Gran/image4.jpg'
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
                name: "Maserati GranTurismo",
                startDate: startDate.toLocaleDateString(),
                endDate: endDate.toLocaleDateString()
            };

            // Retrieve existing rented cars from localStorage
            let rentedCars = JSON.parse(localStorage.getItem('rentedCars')) || [];

            // Add the new car to the list
            rentedCars.push(car);

            // Save the updated list back to localStorage
            localStorage.setItem('rentedCars', JSON.stringify(rentedCars));

            alert(`You have rented the car from ${car.startDate} to ${car.endDate}.`);

            // Optionally, redirect to My Page
            window.location.href = '/MyPage.html';
        } else {
            alert('Please select both start and end dates.');
        }
    });

    // Optional function to send dates to server
    // function sendDatesToServer(startDate, endDate) {
    //     fetch('/save-dates', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ startDate, endDate })
    //     })
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.error('Error:', error));
    // }
});