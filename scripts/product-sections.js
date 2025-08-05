import { products, getProductsByTag } from "../data/products.js";

export function renderProductSection() {
    let productHTML = '';

    products.forEach((product) => {
        productHTML += generateProductHTML(product);
    });

    document.querySelector('.js-all-products').innerHTML = productHTML;
}

export function renderProductShowcase(showcaseClass, tag) {
    const filteredProducts = getProductsByTag(tag);

    let showcaseHTML = '';
    let count = 0;

    while (count < 4) {
        const product = filteredProducts[count];

        showcaseHTML += generateProductHTML(product);
        count++;
    }

    document.querySelector(showcaseClass).innerHTML = showcaseHTML;
}

function generateProductHTML(product) {
    const {
        productId,
        productName,
        productPriceCents
    } = product;

    return `
        <div class="js-product-${productId}-wrapper product-wrapper">
            <p>${productName}</p>
            <p>$${productPriceCents}</p>
        </div>
    `;
}