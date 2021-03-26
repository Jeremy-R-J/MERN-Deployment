import React, { useState, useEffect } from 'react';
import ProductForm from '../components/ProductForm';
import axios from 'axios';
import { navigate } from '@reach/router';

const EditComponent = props => {
    const [product, setProduct] = useState({
        name:"",
        price:"",
        description:"",
        skill1:"",
        skill2:"",
        skill3:""
    });
    const [productErrors, setProductErrors] = useState({});
    const [productName, setProductName] = useState("");
    const [allProduct, setAllProduct] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props.id}`)
            .then(res => {
                setProduct(res.data.results)
                setProductName(res.data.results.name);
            })
            .catch(err => console.log(err));
    }, [])

    const typingChangeHandler = e => {
        setProduct({
            ...product, 
            [e.target.name]: e.target.value
        })
    }

    const checkChangeHandler = e => {
        setProduct({
            ...product,
            [e.target.name]: !product[e.target.name]
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${props.id}`, product)
            .then(res => {
                console.log(res.data);
                if(res.data.message === "error") {
                    setProductErrors(res.data.errors)
                } else {
                    navigate(`/product/${props.id}`);
                }
            })
    }

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
    return (
        <>
            <h4>Edit {productName}</h4>
            <ProductForm
                product={product}
                setProduct={setProduct}
                productErrors={productErrors}
                setProductErrors={setProductErrors}
                submitHandler={submitHandler}
                typingChangeHandler={typingChangeHandler}
                checkChangeHandler={checkChangeHandler}
            />
            
        </>
    )
}

export default EditComponent