import React, {useState} from 'react'
import FormInput from './FormInput'
import { Link } from '@reach/router';

const ProductForm = props => {
    const { product, productErrors, submitHandler, typingChangeHandler} = props;
    // const[name,setName]= useState("")
    // const[price,setPrice]= useState("")
    // const[description,setDescription]= useState("")


    return (
        <>
        <form onSubmit={submitHandler}>
            <FormInput
                label="name"
                labelDisplay="Name: "
                type="text"
                changeHandler={ typingChangeHandler }
                value={ product.name }
                error={ productErrors.name }
                // onChange={e=>setName(e.target.value)}
                // value={name}
            />
            <FormInput
                label="price"
                labelDisplay="Type: "
                type="text"
                changeHandler={ typingChangeHandler }
                value={ product.price }
                error={ productErrors.price }
                // onChange={e=>setPrice(e.target.value)}
                // value={price}
            />
            <FormInput
                label="description"
                labelDisplay="Description: "
                type="text"
                changeHandler={ typingChangeHandler }
                value={ product.description }
                error={ productErrors.description}
                // onChange={e=>setDescription(e.target.value)}
                // value={description}
            />
            <FormInput
                label="skill1"
                labelDisplay="Skill 1: "
                type="text"
                changeHandler={ typingChangeHandler }
                value={ product.skill1 }
                // error={ productError.skill1}
                // onChange={e=>setDescription(e.target.value)}
                // value={description}
            />
            <FormInput
                label="skill2"
                labelDisplay="Skill 2: "
                type="text"
                changeHandler={ typingChangeHandler }
                value={ product.skill2 }
                // error={ productError.skill2}
                // onChange={e=>setDescription(e.target.value)}
                // value={description}
            />
            <FormInput
                label="skill3"
                labelDisplay="Skill 3: "
                type="text"
                changeHandler={ typingChangeHandler }
                value={ product.skill3}
                // error={ productError.skill3}
                // onChange={e=>setDescription(e.target.value)}
                // value={description}
            />
            
            <FormInput 
                type="submit"
                value="Add to Adopotion database!"
                
            />
        </form>
        </>
    )
}

export default ProductForm