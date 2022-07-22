import { apiUrl } from '../config.js';

const HomeScreen = {
    render: async () =>{
        const response = await fetch(apiUrl, { 
            headers: {
                'Content-Type': 'application/json'
            } 
        });
        if(!response || !response.ok){
            return '<div>Error in getting data</div>';
        };
        const products = await response.json();

        return `
            <ul class="products">
                ${products.map(product => `
                    <li>
                    <div class="product">
                        <a href="/#/product/${product._id}">
                            <img src="${product.image}" alt="${product.name}">
                        </a>
                        <div class="product-name">
                            <a href="/#/product/1">
                                ${product.name}
                            </a>
                        </div>
                        <div class="last">
                            <div class="product-price">
                                UGX: ${product.price}
                            </div>
                            <div class="product-button">
                                <i class="fa fa-shopping-cart"></i>
                            </div>
                        </div>
                    </div>
                    </li>
                `).join('\n')}
            </ul>
        `
    }
}

export default HomeScreen;