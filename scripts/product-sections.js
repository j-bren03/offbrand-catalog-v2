import { products, getProductsByTag } from "../data/products.js";
import { formatCurrency } from './utils/currency.js';

export function renderProductShowcaseHeading(tag) {
    const productSectionElement = document.querySelector('.js-product-section');

    // Generate a product heading container
    productSectionElement.innerHTML += `
        <div class="js-product-heading-container-${tag} product-heading-container"></div>
    `;

    let productHeadingItemsHtml = '';

    // Generate items for the product heading container (one containing text and three containing the X svg)
    productHeadingItemsHtml +=  `
        <div class="product-heading-item contains-text">
            <h2>${tag.charAt(0).toUpperCase() + tag.slice(1)} Releases</h2>
        </div>
    `;

    for (let i = 0; i < 3; i++) {
        productHeadingItemsHtml += `
            <div class="product-heading-item">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200" preserveAspectRatio="none"> 
                    <line x1="0" y1="0" x2="200" y2="200" stroke="#000" vector-effect="non-scaling-stroke"></line> 
                    <line x1="200" y1="0" x2="0" y2="200" stroke="#000" vector-effect="non-scaling-stroke"></line>
                </svg>
            </div>
        `;
    }

    // Store generated heading items within the generated product heading container
    document.querySelector(`.js-product-heading-container-${tag}`).innerHTML = productHeadingItemsHtml;
}

export function renderProductShowcase(tag) {
    const productSectionElement = document.querySelector('.js-product-section');

    // Generate a product item container
    productSectionElement.innerHTML += `
        <div class="js-product-item-container-${tag} product-item-container"></div>
    `;

    const taggedProducts = getProductsByTag(tag);
    let generatedProductItemsHtml = '';

    // In showcases, only generate the first four product items
    let productIndex = 0;

    while (productIndex < 4) {
        generatedProductItemsHtml += generateProductItemHtml(taggedProducts[productIndex]);
        productIndex++;
    }

    // Store generated product items in the generated product item container
    document.querySelector(`.js-product-item-container-${tag}`).innerHTML = generatedProductItemsHtml;
}

function generateProductItemHtml(product) {
    const {
        productId,
        productName,
        productPriceCents
    } = product;

    return `
        <div class="js-product-item-${productId} product-item">
            <p>${productName}</p>
            <p>$${formatCurrency(productPriceCents)}</p>
        </div>
    `;
}