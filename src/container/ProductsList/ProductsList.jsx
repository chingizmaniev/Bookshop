import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './ProductsList.css'
import Navibar from '../Navibar/Navibar'
import cartIconInit from '../img/carticon0.png'
import cartIcon from '../img/carticon.png'
import likeIconInit from '../img/like0.png'
import likeIcon from '../img/like.png'
import { productsContext } from '../../contexts/ProductsContext';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
// import Header from '../Header/Header'


const ProductsList = (props) => {
    const {
        products,
        getProducts,
        checkProductInCart,
        addAndDeleteProductInCart,
        searchingProducts,
        checkProductInFavorites,
        addAndDeleteProductInFavorites,
        currentPosts
    } = useContext(productsContext)

    const history = useHistory();
    const search = new URLSearchParams(history.location.search)
    console.log(search.get("name"))
    useEffect(() => {
        getProducts()
    }, [])

    function fetchParams(params, value) {
        if (value === 'all') {
            props.history.push('/products-list')
            props.history.push(props.location.pathname.replace(params))
            getProducts()
            return
        }
        let search = new URLSearchParams(props.history.location.search);
        search.set(params, value)
        let url = `${props.location.pathname}?${search.toString()}`
        props.history.push(url);
        getProducts()
    }

    const [state, setState] = useState(false)

    // function handleClick(e){
    //     console.log(e.target.value)
    // }

    return (
        <>
            <Navibar />
            <Container>
                <div style={{ marginBottom: "40px" }}>
                    <h5 className="products-list__title">Books</h5>
                    <input value={search.get("q")} className="liveSearch" onChange={(e) => fetchParams("q", e.target.value)} type="text" placeholder="Search" />
                    <div className="block-filter-adadptive">
                        <div>
                            <select name="genre" value={search.get("genre")} id="" onChange={(e) => fetchParams("genre", e.target.value)}>
                                <option value="all">Параметры и сбросить</option>
                                <option value="business">Business books</option>
                                <option value="classicLiterature">Classic books</option>
                                <option value="foreignLiterature">Foreign books</option>
                                <option value="russianLiterature">Russian books</option>
                                <option value="childrensBook">Children books</option>
                                <option value="detectives">Detective</option>
                                <option value="fantasy">Fantasy</option>
                                <option value="adventure"></option>
                                <option value="horrors">Horror</option>
                                <option value="novels">Novels</option>
                                <option value="thriller">Thriller</option>
                                <option value="scienceAndEducation">Science and Education</option>
                            </select>
                            <select name="price" id="" value={search.get("price_lte")} onChange={(e) => fetchParams("price_lte", e.target.value)}>
                                <option value="20">До 20</option>
                                <option value="30">До 30</option>
                                <option value="40">До 40</option>
                                <option value="50">До 50</option>
                                <option value="60">До 60</option>
                                <option value="70">До 70</option>
                                <option value="80">До 80</option>
                                <option value="90">До 90</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="block-filter-page">
                    <div>
                        <div className="block-filter">
                            <h5>Filter</h5>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Genre</FormLabel>
                                <RadioGroup aria-label="memory" value={search.get("genre")} name="genre" onChange={(e) => fetchParams("genre", e.target.value)}>
                                    <FormControlLabel value="all" control={<Radio />} label="Clear" />
                                    <FormControlLabel value="business" control={<Radio />} label="business" />
                                    <FormControlLabel value="classicLiterature" control={<Radio />} label="classicLiterature" />
                                    <FormControlLabel value="foreignLiterature" control={<Radio />} label="foreignLiterature" />
                                    <FormControlLabel value="russianLiterature" control={<Radio />} label="russianLiterature" />
                                    <FormControlLabel value="childrensBook" control={<Radio />} label="childrensBook" />
                                    <FormControlLabel value="detectives" control={<Radio />} label="detectives" />
                                    <FormControlLabel value="fantasy" control={<Radio />} label="fantasy" />
                                    <FormControlLabel value="adventure" control={<Radio />} label="adventure" />
                                    <FormControlLabel value="horrors" control={<Radio />} label="horrors" />
                                    <FormControlLabel value="novels" control={<Radio />} label="novels" />
                                    <FormControlLabel value="thriller" control={<Radio />} label="thriller" />
                                    <FormControlLabel value="scienceAndEducation" control={<Radio />} label="scienceAndEducation" />
                                </RadioGroup>
                            </FormControl>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Price</FormLabel>
                                <RadioGroup aria-label="memory" value={search.get("price_lte")} name="price" onChange={(e) => fetchParams("price_lte", e.target.value)}>
                                    {/* <FormControlLabel value="all" control={<Radio />} label="All" /> */}
                                    <FormControlLabel value="20" control={<Radio />} label="20" />
                                    <FormControlLabel value="30" control={<Radio />} label="30" />
                                    <FormControlLabel value="60" control={<Radio />} label="60" />
                                    <FormControlLabel value="70" control={<Radio />} label="70" />
                                    <FormControlLabel value="90" control={<Radio />} label="90" />
                                    {/* <FormControlLabel value="1000" control={<Radio />} label="1000" />
                                    <FormControlLabel value="1200" control={<Radio />} label="1200" />
                                    <FormControlLabel value="1400" control={<Radio />} label="1400" />
                                    <FormControlLabel value="1600" control={<Radio />} label="1600" />
                                    <FormControlLabel value="1800" control={<Radio />} label="1800" />
                                    <FormControlLabel value="2000" control={<Radio />} label="2000" />
                                    <FormControlLabel value="2200" control={<Radio />} label="2200" /> */}
                                </RadioGroup>
                            </FormControl>
                            {/* <button className="filter-btn" onClick={() => getProducts(filter)}>Применить</button> */}
                        </div>
                    </div>
                    <div className="block-in-product-list">
                        <div className="products-block-in-filter-page">
                            {currentPosts.map(item => (
                                <div key={item.id} style={{ display: 'flex' }} className="product-card">
                                    <img src={item.photo} className="img-product-list" style={{ maxWidth: "25%", margin: "30px 0", borderRadius: "2%" }} alt="" />
                                    <div className="first-section-cart">
                                        <Link to={`/product-details${item.id}`}>
                                            <p className="product-card__title">{item.name}</p>
                                        </Link>
                                        <div>
                                            <p>Author: {item.author} </p>
                                        </div>
                                        <div>
                                            <p>Genre: {item.genre}</p>
                                        </div>
                                        <div>
                                            <p>Price: {item.price}</p>
                                        </div>
                                        <div>
                                            <button onClick={() => addAndDeleteProductInCart(item)} className="btn-cart-like">
                                                <img src={checkProductInCart(item.id) ? cartIcon : cartIconInit} alt="" />
                                            </button>
                                            <button onClick={() => addAndDeleteProductInFavorites(item)} className="btn-cart-like">
                                                <img src={checkProductInFavorites(item.id) ? likeIcon : likeIconInit} alt="" />
                                            </button>
                                        </div>
                                        <div>
                                            <Link to={`/product-details${item.id}`}>
                                                <button className="product-list-btn">
                                                    Details
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>))}
                        </div>
                    </div>
                </div>
                <Pagination />
            </Container>
        </>
    );
};

export default ProductsList;