import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import circleLogo from '../img/logocircle5.png'
import { productsContext } from '../../contexts/ProductsContext';
import './Body.css'
import Maps from '../Maps/Maps';
import Slider from '../Carousel/Slider'

const Body = () => {

    const { getProductsBusiness, getProductsClassicLiterature, getProductsChildren, getProductsFantasy, productsBusiness, productsClassicLiterature, productsChildrensBook, productsFantasy } = useContext(productsContext)

    useEffect(() => {
        getProductsBusiness()
        getProductsClassicLiterature()
        getProductsChildren()
        getProductsFantasy()
    }, [])

    return (
        <div>
            <Container>
                <div>
                    <div>
                        <div className="circle" style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                            <img className="elipseLogo" src={circleLogo} alt="" />
                            <h3>Business</h3>
                        </div>
                        <div style={{ display: "flex", overflowX: "scroll", overflowY: "hidden" }}>
                            {productsBusiness.map(item => (
                                <Link key={item.id} to={`/product-details${item.id}`}>
                                    <img className="body-card" src={item.photo} alt="" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="circle" style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                            <img className="elipseLogo" src={circleLogo} alt="" />
                            <h3>Classic</h3>
                        </div>
                        <div style={{ display: "flex", overflowX: "scroll", overflowY: "hidden", marginBottom: "30px" }}>
                            {productsClassicLiterature.map(item => (
                                <Link key={item.id} to={`/product-details${item.id}`}>
                                    <img className="body-card" src={item.photo} alt="" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <Slider />
                <div>
                    <div>
                        <div className="circle" style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                            <img className="elipseLogo" src={circleLogo} alt="" />
                            <h3>Children's</h3>
                        </div>
                        <div style={{ display: "flex", overflowX: "scroll", overflowY: "hidden" }}>
                            {productsChildrensBook.map(item => (
                                <Link key={item.id} to={`/product-details${item.id}`}>
                                    <img className="body-card" src={item.photo} alt="" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="circle" style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                            <img className="elipseLogo" src={circleLogo} alt="" />
                            <h3>Fantasy</h3>
                        </div>
                        <div style={{ display: "flex", overflowX: "scroll", overflowY: "hidden" }}>
                            {productsFantasy.map(item => (
                                <Link key={item.id} to={`/product-details${item.id}`}>
                                    <img className="body-card" src={item.photo} alt="" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="block-btn-in-home">
                    <Link to="/products-list">
                        <button className="btn-in-home">All books</button>
                    </Link>
                </div>
                <div>
                    <Maps />
                </div>
            </Container>
        </div>
    );
};

export default Body;