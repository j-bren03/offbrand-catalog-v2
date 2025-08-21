export function getProductsByTag(tag) {
    return products.filter((product) => {
        const { productTags } = product;
        
        return productTags.includes(tag);
    });
}

export const products = [
    {
        productId: 0,
        productName: 'Blank Product',
        productPriceCents: '0',
        productDescription: '',
        productPhotographer: '',
        productSizes: [],
        productTags: ['popular'],
        productImages: []
    },
    {
        productId: 1,
        productName: 'Black Hoodie',
        productPriceCents: '0',
        productDescription: '',
        productPhotographer: 'https://unsplash.com/@jaysoundo',
        productSizes: [],
        productTags: ['popular', 'new'],
        productImages: [
            '/images/black-hoodie/1.jpg',
            '/images/black-hoodie/2.jpg',
            '/images/black-hoodie/3.jpg'
        ]
    },
    {
        productId: 2,
        productName: 'White T-Shirt',
        productPriceCents: '0',
        productDescription: '',
        productPhotographer: 'https://unsplash.com/@jaysoundo',
        productSizes: [],
        productTags: ['popular'],
        productImages: [
            '/images/white-shirt/1.jpg',
            '/images/white-shirt/2.jpg',
            '/images/white-shirt/3.jpg'
        ]
    },
    {
        productId: 3,
        productName: 'Black Jacket',
        productPriceCents: '0',
        productDescription: '',
        productPhotographer: 'https://unsplash.com/@lovebydm',
        productSizes: [],
        productTags: ['new'],
        productImages: [
            '/images/black-jacket/1.jpg',
            '/images/black-jacket/2.jpg',
            '/images/black-jacket/3.jpg',
            '/images/black-jacket/4.jpg'
        ]
    },
    {
        productId: 4,
        productName: 'Product 5',
        productPriceCents: '0',
        productDescription: '',
        productPhotographer: '',
        productSizes: [],
        productTags: ['popular', 'new'],
        productImages: []
    },
    {
        productId: 5,
        productName: 'Product 6',
        productPriceCents: '0',
        productDescription: '',
        productPhotographer: '',
        productSizes: [],
        productTags: ['new'],
        productImages: []
    }
];