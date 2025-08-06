export function getProductsByTag(tag) {
    return products.filter((product) => {
        const { productTags } = product;
        
        return productTags.includes(tag);
    });
}

export const products = [
    {
        productId: 0,
        productName: 'Product 1',
        productPriceCents: '0',
        productDescription: '',
        productPhotographer: '',
        productSizes: [],
        productTags: ['popular'],
        productImages: []
    },
    {
        productId: 1,
        productName: 'Product 2',
        productPriceCents: '0',
        productDescription: '',
        productPhotographer: '',
        productSizes: [],
        productTags: ['popular', 'new'],
        productImages: []
    },
    {
        productId: 2,
        productName: 'Product 3',
        productPriceCents: '0',
        productDescription: '',
        productPhotographer: '',
        productSizes: [],
        productTags: ['popular'],
        productImages: []
    },
    {
        productId: 3,
        productName: 'Product 4',
        productPriceCents: '0',
        productDescription: '',
        productPhotographer: '',
        productSizes: [],
        productTags: ['new'],
        productImages: []
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