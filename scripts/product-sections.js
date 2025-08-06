import { products, getProductsByTag } from "../data/products.js";

export function renderProductShowcase(tag) {
    // First, generate a product item container to later store the product items
    document.querySelector('.js-product-section').innerHTML += `
        <div class="js-product-item-container-${tag} product-item-container"></div>
    `;

    const taggedProducts = getProductsByTag(tag);
    let generatedProductsHtml = '';

    // In showcases, only display the first four results
    let productIndex = 0;

    while (productIndex < 4) {
        generatedProductsHtml += generateProductHTML(taggedProducts[productIndex]);
        productIndex++;
    }

    // Select the generated product item container, change the inner HTML
    document.querySelector(`.js-product-item-container-${tag}`).innerHTML = generatedProductsHtml;
}

function generateProductHTML(product) {
    const {
        productId,
        productName,
        productPriceCents
    } = product;

    return `
        <div class="js-product-item-${productId} product-item">
            <p>${productName}</p>
            <p>$${productPriceCents}</p>
        </div>
    `;
}