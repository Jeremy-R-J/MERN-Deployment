import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AllProduct from '../components/AllProduct';
import ProductForm from '../components/ProductForm';
import { Link , navigate} from '@reach/router';

const CreateComponent = () => {
    const [allProduct, setAllProduct] = useState([]);
    const [product, setProduct] = useState({
        name:"",
        price:"",
        description:"",
        skill1:"",
        skill2:"",
        skill3:""
    });
    const [productErrors, setProductErrors] = useState({});
    const typingChangeHandler = e => {
        setProduct({
            ...product, 
            [e.target.name]: e.target.value
        })
    }
    
    const submitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/product", product)
            .then(res => {
                console.log(res.data)
                if(res.data.message === "error") {
                    setProductErrors(res.data.errors)
                } else {
                    let newProduct = res.data;
                    setAllProduct([...allProduct, newProduct]);
                    setProductErrors({});
                    setProduct({
                        name:"",
                        price:"",
                        description:"",
                        skill1:"",
                        skill2:"",
                        skill3:""                      
                    })
                    navigate(`/`);

                }
            })
            .catch(err => console.log(err));
    }
    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then(res => setAllProduct(res.data.results))
            .catch(err => console.log("Something went wrong ", err))
    }, []);


    return (
        <div>
            <ProductForm
                product={ product }
                productErrors={productErrors }
                typingChangeHandler={ typingChangeHandler }
                // checkChangeHandler={ checkChangeHandler }
                submitHandler={ submitHandler }
                

            />
        </div>
    )

}
export default CreateComponent
