import { Add, Remove } from '@material-ui/icons';
// import { color } from '@mui/system';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { addProduct } from '../redux/cartRedux';
import { publicRequest } from '../requestMethod';
import { mobile } from '../Responsive';
import { useDispatch } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addProductToWL } from '../redux/wishListRedux';

const Container = styled.div`

`;
const Wrapper = styled.div`
    padding:50px;
    display:flex;
    ${mobile({ flexDirection: "column", padding: "10px" })}
`;
const ImageContainer = styled.div`
    flex:1;
`;
const Image = styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
    ${mobile({ height: "50vh" })}
`;
const InfoContainer = styled.div`
    flex:1;
    padding: 0 50px;
    ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
    font-weight:200;

`;
const Desc = styled.p`
    margin:20px 0;
`;
const Price = styled.span`
    font-size:40px;
    font-weight:100;
`;

const FilterContainer = styled.div`
    width:60%;
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
    ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;

const FilterTitle = styled.span`
    margin-right:10px;
    font-size:20px;
    font-weight:200;

    
`;

const FilterColor = styled.span`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props => props.color};
    margin: 0 5px;
    cursor:pointer;
    
`;

const Select = styled.select`
    margin-left:10px;
    padding:5px;
`;
const Options = styled.option``;

const AddContainer = styled.div`
    width:60%;
    display:flex;
    justify-content:space-between;
    align-items:center;

    ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    ${'' /* justify-content:space-around; */}
    font-weight:700;
`;

const Amount = styled.span`
    width:30px;
    height:30px;    
    border-radius:10px;
    border:1px solid teal;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0 5px;
`;

const Button = styled.button`
    padding:15px;
    border:2px solid teal;
    background:white;
    cursor:pointer;
    font-weight:700;
    margin:0 10px;

    &:hover{
        background-color:#f8f4f4;
    }

    
`;

const AdditonContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;

const Icon = styled.i`
    margin-right: 10px;
    font-size: 30px;
    color:${props => props.color}

`;

const Product = () => {
    const Location = useLocation();
    const id = Location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [productColor, setProductColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();
    const [iconColor, setIconColor] = useState("gray");

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get(`products/find/${id}`);
                setProduct(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getProduct();
    }, [id])

    const handleQuantity = (param) => {
        if (param === "dec" && quantity > 1) {
            setQuantity(quantity - 1);
        }
        else if (param === "inc") {
            setQuantity(quantity + 1);
        }
    }
    const handleClick = () => {
        dispatch(addProduct({ ...product, quantity, productColor, size }));
    }

    const changeColor = (color) => {
        if (color === "red") {
            setIconColor("gray");
            alert("Item removed from wishlist");
        }
        else {
            setIconColor("red");
            dispatch(addProductToWL({ ...product }));
            alert("Item added to wishlist");
        }

    }

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImageContainer>
                    <Image src={`${product.img}`} />
                </ImageContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>${product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>COLOR</FilterTitle>
                            {product.color?.map((c) => (
                                <FilterColor color={"#008080"} key={c} onClick={() => setProductColor(c)} />
                            ))
                            }

                        </Filter>
                        <Filter>
                            <FilterTitle>SIZE</FilterTitle>
                            <Select onChange={(e) => setSize(e.target.value)}>
                                {
                                    product.size?.map((s) => (
                                        <Options key={s} >{s}</Options>
                                    ))
                                }
                            </Select>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handleQuantity("dec")} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity("inc")} />
                        </AmountContainer>
                        <AdditonContainer>
                            <Icon color={iconColor} onClick={() => changeColor(iconColor)}>
                                <FavoriteIcon />
                            </Icon>
                            <Button onClick={handleClick}>ADD TO CART</Button>
                        </AdditonContainer>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product
