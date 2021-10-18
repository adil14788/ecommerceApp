import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../Responsive";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
    padding:20px;
    ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
    font-weight:300;
    text-align:center;
`;

const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;
`;

const TopButton = styled.button`
    padding:10px;
    font-weight:600;
    cursor:pointer;
    background-color:${props => props.type === "filled" ? "black" : "transparent"};
    border:${props => props.type === "filled" && "none"};
    color:${props => props.type === "filled" && "white"}
`;

const Toptexts = styled.div`
    ${mobile({ display: "none" })}
`;

const Toptext = styled.span`
    cursor:pointer;
    margin:0 10px;
`;

const Bottom = styled.div`
    width:70vw;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
    
    flex:3;

`;
const Product = styled.div`
    margin: 20px 0;
    display:flex;
    justify-content:space-between;
    ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
    flex:2;
    display:flex;
`;

const Image = styled.img`
    width:200px;
`;


const Details = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
`;

const ProductName = styled.span``;

const Button = styled.button`
  width: 50%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;

`;

const Icon = styled.i`
    padding:10px;
    margin:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    width:10px;
    height:10px;

    &:hover{
        color:red;
        background-color:lightgray;
        border-radius:50%;
    }

`;
const Wislist = () => {

    const wishlist = useSelector(state => state.wishlist);


    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR WISHLIST</Title>
                <Top>
                    <Link to="/">
                        <TopButton>CONTINUE SHOPPING</TopButton>
                    </Link>
                    <Toptexts>
                        <Toptext>Your WishList({wishlist.products?.length})</Toptext>
                    </Toptexts>
                </Top>
                <Bottom>
                    <Info>
                        {wishlist.products?.length !== 0 ? (wishlist.products?.map((item) => (
                            <Product key={item._id}>
                                <ProductDetail>
                                    <Image src={item.img} />
                                    <Details>
                                        <ProductName>
                                            <h2>
                                                <b>Product:</b>
                                                {item.title}
                                            </h2>
                                        </ProductName>
                                        <Button>
                                            <Link to={`/product/${item._id}`} style={{
                                                textDecoration: "none",
                                                color: "white"
                                            }}>
                                                VIEW PRODUCT
                                            </Link>
                                        </Button>
                                    </Details>
                                </ProductDetail>
                                <Icon title="Remove Item" >
                                    <DeleteOutlineIcon />
                                </Icon>
                            </Product>
                        ))) : <Title>There are no items in the wishlist!!!</Title>}
                    </Info>
                </Bottom>
            </Wrapper>
            <Footer />

        </Container>
    )
}

export default Wislist
