import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToWL } from '../redux/wishListRedux';

const Info = styled.div`
    opacity:0;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.2);
    z-index:3;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:all 0.5s ease;
    cursor:pointer;
  
`;
const Container = styled.div`
    flex:1;
    margin:5px;
    min-width:280px;
    height:350px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: #f5fbfd;
    position:relative;
    &:hover ${Info}{
        opacity:1;
    }

`;

const Circle = styled.div`
    width:200px;
    height:200px;
    border-radius:50%;
    background-color:white;
    position:absolute;
`;
const Image = styled.img`
    height:75%;
    z-index:2;
`;

const Icon = styled.span`
    width:40px;
    height:40px;
    background-color:white;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;

    &:hover{
        background-color:#e9f5f5;
        transition:all 0.5s ease;
        transform:scale(1.2);

    }
    
`;


const Product = ({ item }) => {
    const [iconColor, setIconColor] = useState(false);
    const product = item;
    const dispatch = useDispatch();

    const changeColor = (color) => {
        if (color === true) {
            alert("Item already in the wishlist");
        }
        else {
            setIconColor(true);
            dispatch(addProductToWL({ ...product }));
            alert("Item added to wishlist");
        }

    }


    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlinedIcon />
                </Icon>
                <Icon>
                    <Link to={`/product/${item._id}`}>
                        <SearchOutlinedIcon />
                    </Link>
                </Icon>
                <Icon >
                    <FavoriteBorderOutlinedIcon onClick={() => changeColor(iconColor)} />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
