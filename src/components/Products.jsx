import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components'
// import { popularProducts } from '../data'
import Product from './Product';
import axios from "axios"

const Container = styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items:center;

`;
const Products = ({ cat, filters, sort }) => {
    // console.log(cat, filters, sort)
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : `http://localhost:5000/api/products`);
                // console.log(response.data);
                setProducts(response.data);
                // console.log(products)
            }
            catch (err) {
                console.error(err);
            }

        }
        getProducts();
    }, [cat]);

    useEffect(() => {
        cat && setFilterProducts(products.filter((item) =>
            Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)
            )
        ))
    }, [products, cat, filters])

    useEffect(() => {
        if (sort === "newest") {
            setFilterProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt));
        }
        else if (sort === "asc") {
            setFilterProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
        }
        else {
            setFilterProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
        }
    }, [sort])
    // console.log(filterProducts)

    return (
        <Container>
            {cat ? filterProducts.map((item) => <Product item={item} key={item._id} />) :
                products.map((item) => <Product item={item} key={item._id} />)
            }

        </Container>
    )
}

export default Products
