import React, { useState, useEffect } from 'react'
import axios from 'axios';
import cors from 'cors';
import { Link } from '@reach/router';

const DetailsComponent = props => {
    const { allProduct, setAllProduct } = props;
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props.id}`)
            .then(res => {
                setProduct(res.data.results);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, []);
    const deleteHandler = id => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
        
            .then(response => {
                if(response.data.message === "error"){
                    alert("Something went wrong, please try again later.");
                }
                else if(response.data.results.deletedCount === 0){
                    alert("That's already been deleted, please refresh the page.");
                } else {
                    setAllProduct(allProduct.filter(product=> product._id !== id))
                }
            })
            .catch(err => console.log(err));
    }

    if(loading){
        return (
            <p>loading...</p>
        )
    }

    return (
        <div>
            <h3>{product.name}</h3>
            <p>Type: {product.price}</p>
            <p>Description: {product.description}</p>
            <p>Skill 1: {product.skill1}</p>
            <p>Skill 2: {product.skill2}</p>
            <p>Skill 3: {product.skill3}</p>
            <p><Link to={`/`}><button onClick={ () => deleteHandler(product._id) }>Adopt this crazy Animal!</button></Link></p>
        </div>

    )
}

export default DetailsComponent
