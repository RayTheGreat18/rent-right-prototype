document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('listing-form');
    const listings = document.getElementById('listings');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const location = document.getElementById('location').value;
        const description = document.getElementById('description').value;
        const price = document.getElementById('price').value;
        const imageInput = document.getElementById('image');

        if (!location || !description || !price || !imageInput.files[0]) {
            alert('Please fill in all fields and select an image.');
            return;
        }

        const image = document.createElement('img');
        image.src = URL.createObjectURL(imageInput.files[0]);

        const listingItem = document.createElement('div');
        listingItem.classList.add('listing-item');
        listingItem.innerHTML = `
            <h2>${location}</h2>
            <p>${description}</p>
            <p>Price: $${price}</p>
        `;
        listingItem.appendChild(image);

        listings.appendChild(listingItem);

        form.reset();
    });
});
