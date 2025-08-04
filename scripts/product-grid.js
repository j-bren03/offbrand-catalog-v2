import { products } from "../data/products.js";

function renderProductSection() {
    let productHTML = '';

    products.forEach((product) => {
        const {
            productId,
            productName,
            productPriceCents
        } = product;

        productHTML += `
            <div class="js-product-${productId}-wrapper">
                <p>${productName}</p>
                <p>$${productPriceCents}</p>
            </div>
        `;
    });

    document.querySelector('.js-all-products').innerHTML = productHTML;
}

export default renderProductSection();