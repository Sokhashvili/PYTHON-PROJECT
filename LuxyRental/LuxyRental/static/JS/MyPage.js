document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    const greeting = document.getElementById('greeting');
    const signOutBtn = document.getElementById('sign-out-btn');
    const rentedCarsList = document.getElementById('rented-cars-list');

    if (username) {
        greeting.textContent = `Hello, ${username}`;

        const rentedCars = JSON.parse(localStorage.getItem('rentedCars')) || [];

        rentedCars.forEach(car => {
            const carDiv = document.createElement('div');
            carDiv.className = 'basket-item';

            const imagePath = './image/luxy luxy.jpg'; 

            carDiv.innerHTML = `
                <img src="${imagePath}" alt="${car.name}" class="basket-image">
                <div>
                    <h2>${car.name}</h2>
                    <p>From ${car.startDate} to ${car.endDate}</p>
                </div>
                <button class="remove-btn">Remove</button>
            `;

            rentedCarsList.appendChild(carDiv);

            carDiv.querySelector('.remove-btn').addEventListener('click', function() {
                rentedCarsList.removeChild(carDiv);
                const updatedCars = rentedCars.filter(c => c.name !== car.name);
                localStorage.setItem('rentedCars', JSON.stringify(updatedCars));
            });
        });

        signOutBtn.addEventListener('click', function() {
            localStorage.removeItem('username');
            localStorage.removeItem('rentedCars');
            window.location.href = './index.html';
        });
    } else {
        window.location.href = './index.html';
    }
});