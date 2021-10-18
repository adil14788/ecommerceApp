import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';
import { mobile } from '../Responsive';
import { useLocation } from 'react-router';
import { useState } from 'react';

const Icon = styled.span`
    margin-right:10px;
    ${mobile({ display: "none" })}

`;
const Container = styled.div`

`;

const Title = styled.h1`
    margin:20px;
`;
const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
`;
const Filter = styled.div`
    margin:20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}

`;

const FilterText = styled.span`
    font-size:20px;
    font-weight:600;
    margin-right:20px;

    ${mobile({ margin: "0" })}
`;

const Select = styled.select`
    padding:10px;
    margin-right:20px;

    ${mobile({ margin: "10px 0" })}

`;
const Options = styled.option``;

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];    //to get from the url the category
    const [filters, setfilter] = useState({});
    const [sort, setSort] = useState("Newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setfilter({ ...filters, [e.target.name]: value });
    }

    //    console.log(filter);
    //    console.log(sort);

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <Icon>
                        <FilterAltIcon />
                    </Icon>
                    <FilterText>Filter Products </FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Options disabled >
                            COLOR
                        </Options>
                        <Options>white</Options>
                        <Options>red</Options>
                        <Options>blue</Options>
                        <Options>green</Options>
                        <Options>pink</Options>

                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Options disabled >SIZE</Options>
                        <Options>S</Options>
                        <Options>M</Options>
                        <Options>L</Options>
                        <Options>XL</Options>
                        <Options>XXL</Options>

                    </Select>

                </Filter>
                <Filter>
                    <Icon>
                        <SortIcon />
                    </Icon>
                    <FilterText>Sort Products</FilterText>
                    <Select name="sort" onChange={e => { setSort(e.target.value) }}>
                        <Options value="newest">Newest</Options>
                        <Options value="asc">Price (Asc)</Options>
                        <Options value="desc">Price (Desc)</Options>
                    </Select>
                </Filter>

            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />

        </Container>
    )
}

export default ProductList
