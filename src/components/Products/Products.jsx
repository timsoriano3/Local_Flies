import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    { id: 1, name: 'Pheasant Tail', description: 'Nymph', price: '$3', image: './Images/PTNymph.jpg' },
    { id: 2, name: 'Copper John', description: 'Nymph', price: '$3', image: 'https://cdn.shopify.com/s/files/1/1342/4185/products/fullsizeoutput_804_2048x.jpeg?v=1490296635' },
    { id: 3, name: 'Hair\'s Ear', description: 'Nymph', price: '$3', image: 'https://cdn.shopify.com/s/files/1/1342/4185/products/fullsizeoutput_804_2048x.jpeg?v=1490296635' }
];

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    );
    
}

export default Products;