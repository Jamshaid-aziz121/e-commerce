import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { getProducts } from '../../service';
import './product.css';

import { useNavigate } from 'react-router';
import Loader from '../loader';

export default function Products() {
    const navigate = useNavigate();
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    let [cart, setCart] = useState([])

    useEffect(() => {
        setLoading(true);

        async function fetchProducts() {
            const { products } = await getProducts();
            setLoading(false);
            setProduct(products);

        }

        fetchProducts();

    }, []);

    useEffect(() => {
        console.log('cart', cart)
    }, [cart])

    const handleClick = (product) => {
        let options = {
            state: { product: product, brand: product.brand }
        }
        navigate(`/product-details/${product.id}`, options)
    }

    const handleCart = (product) => {
        setCart([...cart, product]);
        localStorage.setItem("cart", JSON.stringify(cart))
    }

    const ProductItems = ({ product }) => {
        return (
            <Col>
                <Card className='card' style={{ width: '18rem' }} role='button'>
                    <Card.Img variant="top" src={product.thumbnail} />
                    <Card.Body>
                        <Card.Title>{product.Title}</Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        <div className='d-flex justify-content-between'>
                            <Button variant="warning" onClick={() => handleCart(product)} className='warning'>Add to Cart</Button>
                            <Button variant="primary" onClick={() => handleClick(product)}> Details</Button>
                        </div>

                    </Card.Body>
                </Card>
            </Col>
        )
    }


    const productList = products?.map((product, index) => <ProductItems product={product} key={index} />)
    return (
        <>
            {loading ? <Loader /> : <>

                <Container>
                    <Row className='gap-3'>
                        {productList}
                    </Row>
                </Container></>}
        </>
    )
}

