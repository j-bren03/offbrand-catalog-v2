import { carouselItems } from "../data/carousel-items.js";

renderCarouselSetion();

function renderCarouselSetion() {
    let carouselItemsHtml = '';
    let carouselButtonsHtml = '';

    // Generate the HTML for each carousel item, append it to carouselItemsHTML, and append a button to carouselButtonsHtml
    carouselItems.forEach((carouselItem, index) => {
        const {
            carouselHeading,
            carouselDescription,
            carouselLinkText,
            carouselLinkHref
        } = carouselItem;

        const activeItem = index === 0;

        carouselItemsHtml += `
            <div class="carousel-section-item ${activeItem ? 'is-viewing' : ''}">
                <h2>${carouselHeading}</h2>
                <p>${carouselDescription}</p>
                <a href="${carouselLinkHref}">${carouselLinkText}</a>
            </div>
        `;

        carouselButtonsHtml += `
            <button class="carousel-button ${activeItem ? 'is-active' : ''}"></button>
        `;
    });

    // Set the inner HTML to display/render the carousel generated from the data
    document.querySelector('.js-carousel-section').innerHTML = carouselItemsHtml;
    document.querySelector('.js-carousel-buttons').innerHTML = carouselButtonsHtml;


}