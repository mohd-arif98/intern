import React from 'react';
import API from '../utils/API.js';
import ProductCard from './ProductCard.js';

class Home extends React.Component
{
    state = {
        products: []
    }

    componentDidMount()
    {
        API.get('/product').then(result=>{
            this.setState({products: result.data});
        });
    }
    
    render()
    {
        const {products} = this.state;
        return(
            <React.Fragment>
                {products.length !==0? products.map(product=><ProductCard product={product} key={product._id} />):null}
            </React.Fragment>
        )
    }
}

export default Home;
