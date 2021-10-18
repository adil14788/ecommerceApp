import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { mobile } from "../Responsive"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from "../redux/userRedux"


const Container = styled.div`
    height:60px;
    ${mobile({ height: "50px" })};
`;

const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;

    ${mobile({ padding: "10px 0" })}
`;

const Language = styled.span`
    font-size:14px;
    cursor:pointer;

    ${mobile({ display: "none" })}
`;

const Left = styled.div`
    display:flex;
    flex:1;
    align-items:center;

`;

const SearchContainer = styled.div`
    padding:2px;
    display:flex;
    align-items:center;
    border:1px solid lightgray;
    margin-left:25px;
    color:gray;

    ${mobile({ margin: "0  5px" })}
`;

const Input = styled.input`
    outline:none;
    border:none;

    ${mobile({ width: "50px" })}
    
`;

const Center = styled.div`
    flex:1;
    display:flex;
    justify-content:center;
       
`;

const Logo = styled.h1`
    font-weight:bold;
    ${mobile({ fontSize: "24px" })}

`;

const Right = styled.div`
    flex:1;
    display:flex;
    justify-content:flex-end;

    ${mobile({ flex: 2, justifyContent: "center" })}
    
`;

const MenuItem = styled.span`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
    color:black;
    text-decoration: none;
    user-select:none;
    display:${props => props.user}

    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Icon = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;


const Navbar = () => {
    const cart = useSelector(state => state.cart.quantity);
    const user = useSelector(state => state.user.currentUser);
    const wishlist = useSelector(state => state.wishlist.products);

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(logout())

    }


    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input type="text" placeholder="Search" />
                        <SearchIcon />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>AdilECOM.</Logo>
                </Center>
                <Right>
                    <Link to="/" onClick={handleClick} style={{
                        textDecoration: "none",
                        display: user ? "flex" : "none",
                    }} >
                        <MenuItem >LOGOUT</MenuItem>
                    </Link>
                    <Link to="/admin" style={{
                        textDecoration: "none",
                        display: (user && user.isAdmin) ? "flex" : "none",
                    }}>
                        <MenuItem >ADMIN CONSOLE</MenuItem>
                    </Link>
                    <Link to="/admin" style={{
                        textDecoration: "none",
                        display: user ? "none" : "flex",

                    }}>
                        <MenuItem >REGISTER</MenuItem>
                    </Link>
                    <Link to="/login" style={{
                        textDecoration: "none",
                        display: user ? "none" : "flex",
                    }} >
                        <MenuItem>SIGN IN</MenuItem>
                    </Link>
                    <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={cart} color="primary">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </MenuItem>
                    </Link>
                    <Link to="/wishlist" title="wishlist">
                        <MenuItem>
                            <Badge badgeContent={wishlist.length} color="primary">
                                <FavoriteBorderOutlinedIcon />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
