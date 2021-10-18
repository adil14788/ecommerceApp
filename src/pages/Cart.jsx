import { Add, Remove } from "@material-ui/icons";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../Responsive";
import { useSelector } from "react-redux"
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethod";
import { useHistory } from "react-router";
import { deleteProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const KEY = process.env.REACT_APP_STRIPE;


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
    text-decoration:underline;
    cursor:pointer;
    margin:0 10px;
`;

const Bottom = styled.div`
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

// const Hr = styled.hr`
//     background-color:#eee;
//     border:none;
//     height:1px;
// `;

const Details = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props => props.color};
`;

const ProductSize = styled.span``;

const PrizeDetail = styled.span`
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const ProductAmountContainer = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
`;

const ProductAmount = styled.div`
    font-size:24px;
    margin:5px;
    ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
    font-size:30px;
    font-weight:200;

    ${mobile({ marginBottom: "20px" })}
`;


const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
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
const Cart = () => {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    console.log(cart);

    const [stripeToken, setStripeToken] = useState(null)
    const history = useHistory();

    const onToken = (token) => {
        setStripeToken(token);
    };

    const handleClick = (item) => {
        // const x = cart.products.filter(sample => sample._id !== item._id);
        // // console.log(x);
        // dispatch(deleteProduct({ }));

    }


    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post("checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100,
                });
                history.push("/success", { data: res.data });

                console.log(res.data);
            } catch (err) {
                console.error(err);
            }
        }
        stripeToken && makeRequest();
    }, [stripeToken, cart.total, history]);

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <Link to="/">
                        <TopButton>CONTINUE SHOPPING</TopButton>
                    </Link>
                    <Toptexts>
                        <Toptext>Shopping Bag({cart.quantity})</Toptext>
                        <Toptext>Your WishList(2)</Toptext>
                    </Toptexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>

                    <Info>
                        {cart.products?.length !== 0 ? (cart.products?.map((item) => (
                            <Product key={item._id}>
                                <ProductDetail>
                                    <Image src={item.img} />
                                    <Details>
                                        <ProductName>
                                            <b>Product:</b> {item.title}
                                        </ProductName>
                                        <ProductId>
                                            <b>ID:</b> 93813718293
                                        </ProductId>
                                        <ProductColor color={item.color} />
                                        <ProductSize>
                                            <b>Size:</b> {item.size}
                                        </ProductSize>
                                    </Details>

                                </ProductDetail>
                                <PrizeDetail>
                                    <ProductAmountContainer>
                                        <Add />
                                        <ProductAmount>{item.quantity}</ProductAmount>
                                        <Remove />
                                    </ProductAmountContainer>
                                    <ProductPrice>
                                        ${item.price * item.quantity}
                                    </ProductPrice>
                                </PrizeDetail>
                                <Icon title="Remove Item" >
                                    <DeleteOutlineIcon onClick={() => handleClick(item)} />
                                </Icon>
                                {/* <Hr /> */}
                            </Product>
                        ))) : <Title>There are no items in the bag !!!</Title>}

                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {cart?.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ {cart?.total}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout name="ADIl ECOM"
                            image="https://lh3.googleusercontent.com/ogw/ADea4I6ZsX0IJ_0iVKqHZoJ8ciVOuCPEag4DCfArvxj5Dg=s64-c-mo"
                            billingAddress shippingAddress
                            description={`Your total amount is $${cart.total}`}
                            amount={cart.total * 100}
                            token={onToken}
                            stripeKey={KEY}>
                            <Button>CHECKOUT NOW</Button>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />

        </Container>
    )
}

export default Cart
