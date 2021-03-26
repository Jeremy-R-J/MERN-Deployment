import React from 'react'
import { Link } from '@reach/router';//link so you can replace "a" tag line 38 you need to wrap so you can routw the in
import axios from 'axios';


const AllProduct = props => {
    const { allProduct, setAllProduct } = props;

    // const deleteHandler = id => {
    //     axios.delete(`http://localhost:8000/api/product/${id}`)
    //         .then(response => {
    //             if(response.data.message === "error"){
    //                 alert("Something went wrong, please try again later.");
    //             }
    //             else if(response.data.results.deletedCount === 0){
    //                 alert("That's already been deleted, please refresh the page.");
    //             } else {
    //                 setAllProduct(allProduct.filter(product=> product._id !== id))
    //             }
    //         })
    //         .catch(err => console.log(err));
    // }

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>

                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    allProduct.map( (product, i) =>
                        <tr key={i}>
                            <td>{product.name}</td> 
                            <td>{product.price }</td>
                            
                            <td><Link to={`/product/${product._id}/edit`}>Edit</Link>|||<Link to={`/product/${product._id}`}>details</Link></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}
export default AllProduct;