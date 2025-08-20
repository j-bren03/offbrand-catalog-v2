import { carouselItems } from "./data/carousel-items.js";

function renderCarouselSetion() {
    /**
     * TODO:
     * Eventually add setInterval() to automatically update the carousel.
     * Also take into account stopping/resuming the interval when pausing/playing.
     * Also make sure to reload the interval when a user manually clicks on one of the buttons when the interval is running.
     */

    let carouselItemsHtml = '';
    let carouselButtonsHtml = '';

    // Generate the HTML for each carousel item, append it to carouselItemsHTML, and append a button to carouselButtonsHtml
    carouselItems.forEach((carouselItem, index) => {
        const {
            carouselId,
            carouselHeading,
            carouselDescription,
            carouselLinkText,
            carouselLinkHref
        } = carouselItem;

        const activeItem = index === 0;

        carouselItemsHtml += `
            <div class="js-carousel-section-item-${carouselId} carousel-section-item ${activeItem ? 'is-active' : ''}">
                <h2>${carouselHeading}</h2>
                <p>${carouselDescription}</p>
                <a href="${carouselLinkHref}">${carouselLinkText}</a>
            </div>
        `;

        carouselButtonsHtml += `
            <button class="js-carousel-button carousel-button ${activeItem ? 'is-active' : ''}" data-carousel-id="${carouselId}"></button>
        `;
    });

    // Set the inner HTML to display/render the carousel generated from the data
    document.querySelector('.js-carousel-section').innerHTML = carouselItemsHtml;
    document.querySelector('.js-carousel-buttons').innerHTML = carouselButtonsHtml;

    // After rendering, make added carousel buttons interactive
    document.querySelectorAll('.js-carousel-button').forEach((carouselButton) => {
        carouselButton.addEventListener('click', () => {
            const { carouselId } = carouselButton.dataset;
            
            // Remove the active classes and add them to the selected items
            document.querySelectorAll('.is-active').forEach((activeItem) => {
                activeItem.classList.remove('is-active');
            })

            document.querySelector(`.js-carousel-section-item-${carouselId}`).classList.add('is-active');
            carouselButton.classList.add('is-active');
        });
    });
}

export default renderCarouselSetion;