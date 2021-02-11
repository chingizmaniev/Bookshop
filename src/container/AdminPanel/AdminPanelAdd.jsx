import React, { useContext, useState } from 'react';
import { adminContext } from '../../contexts/AdminContext';
import './AdminPanelAdd.css'

const AdminPanelAdd = (props) => {
    const { addProduct } = useContext(adminContext)
    const [product, setProduct] = useState({})

    const createNewProduct = (e) => {
        let newObj = {
            ...product,
            comments: [],
            likes: 0,
            [e.target.name]: e.target.value
        }
        setProduct(newObj)
    }
    console.log(product)

    function validateInput() {
        if (!product.genre || !product.name.trim() || !product.author.trim() || !product.pages.trim() || !product.price.trim() || !product.description.trim() || !product.photo.trim()) {
            return alert("Заполните поля!!!")
        }
        else {
            addProduct(product, props.history)
        }
    }

    return (
        <div className="add__panel">
            <select name="genre" id="" onChange={createNewProduct}>
                <option value="">Select category</option>
                <option value="business">Business</option>
                <option value="classicLiterature">Classic</option>
                <option value="foreignLiterature">Foreign</option>
                <option value="russianLiterature">Russian</option>
                <option value="childrensBook">Children</option>
                <option value="detectives">Detective</option>
                <option value="fantasy">Fantasy</option>
                <option value="adventure">Adventure</option>
                <option value="horrors">Horror</option>
                <option value="novels">Novel</option>
                <option value="thriller">Action</option>
                <option value="scienceAndEducation">Science and Education</option>
            </select>
            <input className="inputs" onChange={createNewProduct} placeholder="name" name="name" type="text" />
            <input className="inputs" onChange={createNewProduct} placeholder="author" name="author" type="text" />
            <input className="inputs" onChange={createNewProduct} placeholder="page number" name="pages" type="text" />
            <input className="inputs" onChange={createNewProduct} placeholder="price" name="price" type="text" />
            <input className="inputs" onChange={createNewProduct} placeholder="description" name="description" type="text" />
            <input className="inputs" onChange={createNewProduct} placeholder="image" name="photo" type="text" />
            <button className="inputs" onClick={validateInput}>Add</button>
        </div>
    );
};

export default AdminPanelAdd;