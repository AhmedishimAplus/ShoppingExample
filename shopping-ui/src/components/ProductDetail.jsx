import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/api';
const ProductDetail=()=>{
    const { id } = useParams();
    const [product,setProduct]=useState(null);
    useEffect(()=> {getProductById(id).then((response) => setProduct(response.data));}
        ,[id]);
    getProductById(id).then((response) => setProduct(response.data));
    return (<div>
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
    </div>
    );
}
export default ProductDetail;