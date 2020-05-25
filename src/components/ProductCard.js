import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import styled from 'styled-components';

import {AuthContext} from '../contexts/AuthContext.js';

const ProductCard = (props) => {

    const contextType = AuthContext;
    console.log(contextType);
    const {_id, productName, image_url} = props.product;
    return (

         <StyledCard>
             <ProdImage>
                <CardImg top width="10%" src={image_url} alt="Card image cap" />
            </ProdImage>
            <CardBody>
                <CardTitle><strong>{productName.toUpperCase()}</strong></CardTitle>
                <CardSubtitle>Product ID: {" "} {_id} </CardSubtitle>
                <Button onClick={()=>{this.addToCart()}}>Add to Cart</Button>
            </CardBody>
        </StyledCard>
 
  );
};

const ProdImage = styled.div`
    height: auto;
    width: 50%;
`;

const StyledCard = styled(Card)`
    height: auto;
    width: 30%;    
`;

export default ProductCard;